# Newsletter Component Documentation

## File Location
lifeline-canada-app/src/components/Home/Newsletter.tsx

## Handle Submit - Integration Instructions

When a user subscribes to the newsletter, the following data is collected:

| Field | Description |
|-------|-------------|
| `name` | Subscriber's full name |
| `email` | Subscriber's email address |

## What You Need to Provide

Please specify which platform you are using to manage newsletter subscriptions. For example:

- **Mailchimp**
- **ConvertKit**
- **MailerLite**
- **Brevo (formerly Sendinblue)**
- **Constant Contact**
- **HubSpot**
- **WordPress Newsletter Plugin**
- **Custom Database**
- **Other platform**

## What You Need to Update

Please update the `handleSubmit` function in the file according to your newsletter platform.

Replace the existing implementation (which currently only shows a temporary success message) with your own implementation to send the `name` and `email` data to your newsletter service provider.

### Current Behavior

The form currently:
1. Requires reCAPTCHA verification before submission
2. Shows a temporary success message for 5 seconds
3. Clears the form fields
4. Does NOT actually store or send the data anywhere

### What Needs to be Added

You need to implement the actual API call to your newsletter platform's endpoint to add the subscriber to your mailing list.

## reCAPTCHA Configuration

The form uses Google reCAPTCHA. The site key is configured in environment variables:

