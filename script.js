function showInfo(service) {
    const infoDisplay = document.getElementById('info-display');
    let infoText = "";

    switch (service) {
        case 'insurance':
            infoText = ` <h1>Insurance Claims</h1>
        <p>Insurance claims are requests made by policyholders to their insurance company for compensation due to covered losses or damages.</p>
    </div>
    <h2>Process of Claiming</h2>
        <ol>
            <li>Notify Your Insurer: Report the incident to your insurance company as soon as possible.</li>
            <li>Gather Documentation: Collect relevant documents, such as:
                <ul>
                    <li>Incident reports</li>
                    <li>Photographs of damages</li>
                    <li>Medical records (if applicable)</li>
                    <li>Receipts for any expenses incurred</li>
                </ul>
            </li>
            <li>Submit Your Claim: Complete and submit the claim form along with your documentation.</li>
            <li>Claim Assessment: The insurance company will evaluate your claim and may contact you for additional information.</li>
            <li>Receive a Decision: You will be informed of the outcome, and if approved, compensation will be provided according to your policy terms.</li>

            <h2>Get In Touch</h2>
        <p>If you have any questions or need assistance with your claim, please contact us at:</p>
        <p><strong>Phone:</strong> [Your Contact Number]</p>
        <p>Our team is ready to help you navigate the claims process with ease and efficiency.</p>
               </p>`;
            break;
        case 'billing':
            infoText = `<h3><h1>Billing Information</h1>
    
    <p>Billing is the process of invoicing clients for services rendered or products sold. Accurate billing ensures that you receive timely payments and maintain healthy cash flow.</p>
    
    <br>

    <h2>Billing Process:</h2>
    
    <p>1. <strong>Prepare Invoice:</strong> Create a detailed invoice that includes the description of services, amounts due, and payment terms.</p>
    
    <p>2. <strong>Send Invoice:</strong> Deliver the invoice to the client through their preferred method (email, mail, etc.).</p>
    
    <p>3. <strong>Follow Up:</strong> If payment is not received by the due date, send a reminder to the client.</p>
    
    <p>4. <strong>Receive Payment:</strong> Once payment is received, update your records to reflect the transaction.</p>
    
    <p>5. <strong>Address Discrepancies:</strong> If there are any disputes or discrepancies, resolve them promptly to maintain client satisfaction.</p>
    
    <br>

    <h2>Get In Touch</h2>
    
    <p>If you have any questions or need assistance with your billing inquiries, please contact us at:</p>
    
    <br>
    
    <p><strong>Phone:</strong> +2109540854</p>
    
    <p>Our team is ready to assist you with your billing needs efficiently.</p></p>`;
            break;
        case 'reminders':
            infoText = `<h3>Appointment & Billing Reminders</h3>
                        <p> <h1>Appointment & Billing Reminders</h1>
    
    <p>Staying organized with appointment and billing reminders is essential for ensuring timely service and payment. Our reminders help you manage your schedule and financial commitments effectively.</p>
    
    <br>

    <h2>Appointment Reminders:</h2>
    
    <p>1. <strong>Scheduling:</strong> Book your appointments in advance to secure your preferred time.</p>
    
    <p>2. <strong>Confirmation:</strong> You will receive a confirmation notification via email or SMS.</p>
    
    <p>3. <strong>Reminder Notifications:</strong> Get reminders 24 hours before your appointment to ensure you don't forget.</p>
    
    <br>

    <h2>Billing Reminders:</h2>
    
    <p>1. <strong>Invoice Due Dates:</strong> Receive notifications regarding upcoming due dates for your invoices.</p>
    
    <p>2. <strong>Payment Confirmation:</strong> Get confirmations once payments have been successfully processed.</p>
    
    <p>3. <strong>Follow-Up Alerts:</strong> If a payment is overdue, you will receive a follow-up reminder to ensure timely resolution.</p>
    
    <br>

    <h2>Use Our Assistant</h2>
    
    <p>If you need further information or assistance regarding appointments or billing reminders, feel free to use our assistant for help!</p>
    
    <br>

    <h2>Get In Touch</h2>
    
    <p>If you have any questions or need assistance, please contact us at:</p>
    
    <p><strong>Phone:</strong> +2109540854</p>
    
    <p>Our team is here to assist you with your appointment and billing needs efficiently.</p></p>`;
            break;
        case 'feedback':
            infoText = `<h3>Feedback & Support</h3>
                        <p>Your feedback is important to us! We appreciate your thoughts on how we can improve our services. 
                        Please reach out to our support team for any assistance.</p>`;
            break;
        case 'contact':
            infoText = `<h3>Contact Us</h3>
                        <p>If you have any queries, feel free to contact us via phone or email. 
                        Our customer support team is available 24/7 to assist you.</p>`;
            break;
        default:
            infoText = `<p>Please select a service to see more information.</p>`;
    }
    window.watsonAssistantChatOptions = {
        integrationID: "63837f82-3b67-421f-ab78-6c6698259796", // The ID of this integration.
        region: "eu-gb", // The region your integration is hosted in.
        serviceInstanceID: "3b79ea74-996e-403e-9a6f-1880640a856c", // The ID of your service instance.
        onLoad: async (instance) => { await instance.render(); }
      };
      setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
    infoDisplay.innerHTML = infoText;
}
