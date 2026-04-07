# Form Submission Documentation - TLCEmailContactForm

## File Location
lifeline-canada-app/src/components/Contacts/TLCEmailContactForm.tsx

## Important Note - Form Handles Two Different Use Cases

This form component is shared between two pages:

| Page Mode | Title | Purpose |
|-----------|-------|---------|
| `contact-us` | TLC Email Contact Form | General contact inquiries |
| `support` | Crisis Email Support Form | Crisis support requests |

## Handle Submit - Integration Instructions

When a user submits the form, the following data is collected:

| Field | Description |
|-------|-------------|
| `firstName` | User's first name |
| `lastName` | User's last name |
| `email` | User's email address |
| `message` | User's message/inquiry |

### What You Need to Do

Please update the `handleSubmit` function in the file according to your platform.

**Important:** Since this form is used on two different pages, you may want to handle or identify submissions differently based on which page the submission came from.

You can determine the submission context by checking the `title` or `subtitle` props passed to the component, whether it's a general inquiry or a crisis support request.

Replace the existing `console.log` with your own implementation to send the `formData` to wherever you want to receive submissions on your platform.
