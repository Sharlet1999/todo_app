exports.handler = async (event) => {
    console.log(event);
    const msgId = event.pathParameters.msgId;
    const msg ={
        'msgId': msgId,
        'msgText': "first messege   " + msgId
    };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify(msg),
    };
    return response;
};
