# logs the contents of the event object


module.exports.handler = async (event) => {
  console.log('Received an SQS message:', event);
};
