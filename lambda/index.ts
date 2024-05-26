const AWS = require('aws-sdk');

exports.handler = async (event) => {
  console.log('S3 EVENT:::', JSON.stringify(event));
  // Configure S3 client (replace region if needed)
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

  // Define source and destination details (replace with your details)
  const bucket = 'video-storage-poc-tricon';
  const key = 'video-data.json';

  try {
    let data: any = [];

    const s3Items = {};

    const params = {
      Bucket: bucket,
      Prefix: '', // Empty prefix to list objects at the root level
    };
  
    let videoData = await s3.listObjectsV2(params).promise();
    videoData = videoData.Contents.map(obj => obj.Key);

    console.log("Video:", videoData);

    videoData.forEach(key => {
      const value = key.split('/');
      if (value.length === 3) {
        if (!s3Items[value[1]]) s3Items[value[1]] = {name: value[1]};
        if (value[2].includes('.jpg')) {
          s3Items[value[1]]['posterImage'] = value[2];
        } else {
          s3Items[value[1]]['key'] = value[2];
        }
      }
    });
    console.log('s3items', s3Items)
    data = Object.values(s3Items);

    // Store data in destination S3 object
    await s3.putObject({ Body: JSON.stringify(data), Bucket: bucket, Key: key }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(`Data transferred from ${bucket}/${key} to ${bucket}/${key}`),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(`Error: ${err.message}`),
    };
  }
};