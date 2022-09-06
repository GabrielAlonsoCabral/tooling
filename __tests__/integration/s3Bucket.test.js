const {describe, it, expect, beforeAll, afterAll} =  require("@jest/globals");

const { main } = require("../../src");
const {S3} = require('../../src/factory');

describe('Testing AWS Services offline with LocalStack',()=>{
    const bucketConfig ={
        Bucket:"test"
    }

    beforeAll(async()=>{
        await S3.createBucket(bucketConfig).promise()
    })

    afterAll(async()=>{
        await S3.deleteBucket(bucketConfig).promise()
    })

    it('it should return an array S3 Buckets',async()=>{
        const expected =  bucketConfig.Bucket
        const response = await main()

        const {allBuckets:{Buckets}} = JSON.parse(response.body)
        const {Name} = Buckets.find(({Name})=> Name===expected)

        expect(response.statusCode).toStrictEqual(200)
        expect(Name).toStrictEqual(expected)
    })
})