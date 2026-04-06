# Volunteer Form Component Documentation

## File Location
lifeline-canada-app/src/components/Volunteer/VolunteerFormSection.tsx

## Handle Submit - Integration Instructions

When a user submits the volunteer application, the following data is collected:

### Personal Information

| Field | Description | Required |
|-------|-------------|----------|
| `firstName` | User's first name | Yes |
| `lastName` | User's last name | Yes |
| `age` | User's age | Yes |
| `gender` | User's gender (Male/Female/Non Binary/Other) | Yes |
| `pronouns` | User's pronouns (He/Him/She/Her/They/Them) | Yes |
| `address` | Street address | Yes |
| `city` | City name | Yes |
| `province` | Province (Ontario, Quebec, BC, etc.) | Yes |
| `postalCode` | Postal code | No |
| `email` | Email address | Yes |
| `phone` | Phone number | Yes |
| `preferredContact` | Preferred contact method (Email/Phone/Text) | Yes |
| `driversLicense` | Whether user has valid driver's license (Yes/No) | Yes |

### Skills & Interests

| Field | Description | Required |
|-------|-------------|----------|
| `volunteerAreas` | Array of selected volunteer roles/skills | Yes |
| `experience` | Details of interests and experience | No |
| `training` | Any specialized training or expertise | No |
| `resume` | Uploaded file (PDF, DOC, DOCX) | No |

### Time Commitment

| Field | Description | Required |
|-------|-------------|----------|
| `timeCommitment` | Time commitment (Less than 6 months / 6 months to a year / On a project basis / Ongoing / Other) | Yes |
| `otherCommitment` | Explanation if "Other" is selected | Conditional |
| `hoursPerWeek` | Hours available per week | Yes |
| `additionalInfo` | Any additional information to share | No |

### Volunteer Confirmation

| Field | Description | Required |
|-------|-------------|----------|
| `volunteerConfirmation` | Checkbox confirming application for volunteer position | Yes |

## What You Need to Provide

Please specify which platform you are using to collect volunteer application data. For example:

- **Google Forms / Google Sheets**
- **Airtable**
- **Typeform**
- **JotForm**
- **WordPress Form Plugin** (e.g., Gravity Forms, WPForms)
- **CRM Platform** (e.g., Salesforce, HubSpot)
- **Custom Database / Backend API**
- **Email inbox**
- **Other platform**

## What You Need to Update

Please update the `handleSubmit` function in the file according to your platform.

Replace the existing `console.log` (which currently only logs to the browser console) with your own implementation to send the `formData` and `file` (resume) to your data collection platform.

### Current Behavior

The form currently:
1. Validates all required fields
2. Collects all form data including multi-select checkboxes
3. Accepts a resume file upload
4. Logs the data to the browser console only
5. Does NOT actually store or send the data anywhere

### What Needs to be Added

You need to implement:
1. An API call to send the form data to your platform
2. File upload handling for the resume (if your platform supports file attachments)
3. Success/error feedback for the user
4. Form reset or redirect after successful submission

### Important Considerations

- **File Upload**: The resume file needs special handling. Ensure your platform can accept file attachments or consider using a file storage service (like AWS S3, Google Drive, etc.)
- **Large Data**: The form collects significant amount of data - ensure your platform can handle the full payload
- **Volunteer Areas**: This is an array of selected skills - make sure your platform can accept array/multi-select data
