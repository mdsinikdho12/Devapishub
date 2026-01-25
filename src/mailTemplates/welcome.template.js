export function welcomeTemplate(name) {
  return `
  <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #1F2937; line-height: 1.6; max-width: 600px; margin: auto; padding: 32px; border-radius: 12px; background: linear-gradient(to bottom right, #F3F4F6, #FFFFFF); box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #E5E7EB;">
    
    <h2 style="color: #4F46E5; text-align: center; font-size: 24px; margin-bottom: 16px;">Welcome to DevApiHub 🚀</h2>
    
    <p style="font-size: 16px; margin-bottom: 12px;">Hi <b>${name}</b>,</p>
    
    <p style="font-size: 16px; margin-bottom: 24px;">
      Thanks for joining <b>DevApiHub</b>. 
      You can now explore 100+ free & premium public APIs.
    </p>

    <div style="text-align: center; margin: 32px 0;">
      <a href="https://devapihub.XYZ" 
         style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.2s;">
         Explore APIs
      </a>
    </div>
    
    <p style="margin-top: 32px; font-size: 15px; color: #4B5563;">
      Warm regards,<br/>
      <strong>DevApihub Support</strong>
    </p>

    <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 24px 0;">

    <p style="font-size: 12px; color: #9CA3AF; text-align: center;">
      © ${new Date().getFullYear()} DevApiHub. All rights reserved.
    </p>
  </div>
  `;
}
