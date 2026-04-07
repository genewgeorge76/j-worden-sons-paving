// netlify/functions/send-to-kickserv.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Only allow POST requests for security
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  
  // These pull securely from your Netlify settings
  const KICKSERV_API_KEY = process.env.KICKSERV_API_KEY;
  const KICKSERV_SUBDOMAIN = 'jwordenandsons'; // Update if your Kickserv URL is slightly different

  try {
    const response = await fetch(`https://${KICKSERV_SUBDOMAIN}.kickservapp.com/api/v1/leads.json`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${KICKSERV_API_KEY}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        lead: {
          first_name: data.customer_name,
          email: data.customer_email,
          phone: data.customer_phone,
          description: `SOURCE: ${data.source_url} | SERVICE: ${data.service_type} | NOTES: ${data.job_description}`
        }
      })
    });

    if (!response.ok) {
      throw new Error('Kickserv API error');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Lead successfully sent to Kickserv" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
