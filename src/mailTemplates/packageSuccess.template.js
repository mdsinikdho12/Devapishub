export function proPlanTemplate(name, packageName = "Pro") {
  const accentColor = "#0070f3";
  const year = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <div style="width: 100%; background-color: #0a0a0a; padding-bottom: 40px;">
      <div style="background-color: #111111; margin: 40px auto; width: 100%; max-width: 550px; border-radius: 12px; border: 1px solid #222; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        
        <div style="background: linear-gradient(135deg, #111 0%, #1a1a1a 100%); padding: 40px 20px; text-align: center; border-bottom: 1px solid #222;">
          <div style="font-size: 24px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">DevApiHub</div>
          <div style="display: inline-block; padding: 4px 12px; border-radius: 20px; background: rgba(0, 112, 243, 0.1); color: ${accentColor}; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-top: 10px; border: 1px solid rgba(0, 112, 243, 0.3);">
            ${packageName} Plan Active
          </div>
        </div>
        
        <div style="padding: 40px; color: #ececec;">
          <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin-bottom: 10px;">Welcome to the Elite.</h1>
          <p style="font-size: 14px; color: ${accentColor}; font-weight: 600; margin-bottom: 20px;">Best for professional developers — $0.50/month</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #a1a1a1;">Hi ${name},</p>
          <p style="font-size: 16px; line-height: 1.6; color: #a1a1a1;">Your workspace has been upgraded. You now have full access to our high-performance infrastructure.</p>
          
          <div style="margin: 30px 0; border-top: 1px solid #222; padding-top: 20px;">
            <div style="margin-bottom: 12px; font-size: 15px; color: #ffffff;">
              <span style="color: ${accentColor}; margin-right: 10px; font-weight: bold;">&rarr;</span> 10 API Copies Per Day
            </div>
            <div style="margin-bottom: 12px; font-size: 15px; color: #ffffff;">
              <span style="color: ${accentColor}; margin-right: 10px; font-weight: bold;">&rarr;</span> Instant Email Notifications
            </div>
            <div style="margin-bottom: 12px; font-size: 15px; color: #ffffff;">
              <span style="color: ${accentColor}; margin-right: 10px; font-weight: bold;">&rarr;</span> Exclusive Early Access
            </div>
            <div style="margin-bottom: 12px; font-size: 15px; color: #ffffff;">
              <span style="color: ${accentColor}; margin-right: 10px; font-weight: bold;">&rarr;</span> Premium 24/7 Support
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://devapihub.com/docs" style="background-color: #ffffff; color: #000000; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block;">Start Integrating</a>
          </div>
        </div>

        <div style="text-align: center; padding: 30px; font-size: 12px; color: #444; border-top: 1px solid #222;">
          <p style="margin-bottom: 10px;">&copy; ${year} DevApiHub Inc. <br> Built for developers, by developers.</p>
          <p>
            <a href="#" style="color: #666; text-decoration: underline;">Manage Billing</a> &bull; 
            <a href="#" style="color: #666; text-decoration: underline;">Documentation</a>
          </p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}
