# Make Contribution Component Documentation

## File Location
lifeline-canada-app/src/components/Home/MakeContribution.tsx

## Payment Integration Instructions

This component displays information about making contributions/donations to The LifeLine Canada Foundation. Currently, the donation button does not have any payment functionality implemented.

## What You Need to Provide

Please specify which payment platform you want to use for processing donations. For example:

- **Stripe**
- **PayPal**
- **Square**
- **Moneris**
- **Authorize.net**
- **CanadaHelps** (for Canadian charities)
- **CharityHelp**
- **Other payment provider**

## What You Need to Update

Please update the donation button to integrate with your chosen payment platform.

### Current Behavior

The donation button currently:
- Has no click handler or functionality
- Does not process any payment
- Does not collect donation amount or donor information
- Serves as a visual element only

### What Needs to be Added

You need to implement payment integration that should handle:

| Feature | Description |
|---------|-------------|
| **Click Handler** | Add `onClick` functionality to the donation button |
| **Payment Modal/Page** | Open a payment form or redirect to payment page |
| **Donation Amount** | Allow user to select or enter donation amount |
| **Donor Information** | Collect name, email, address for tax receipts |
| **Payment Processing** | Securely process credit card/PayPal payments |
| **Receipt Generation** | Send email confirmation and tax receipt |
| **Success/Error Handling** | Show appropriate feedback to users |

### Example Integration Options

**Option 1 - Payment Button Link:**
Replace the button with a link to your existing payment page (e.g., PayPal.me link, Stripe payment link)

**Option 2 - Payment Modal:**
Add a modal that opens when clicking the button, containing the payment form

**Option 3 - Redirect to Payment Page:**
Redirect users to a dedicated donation page on your website

### Important Considerations for Canadian Charities

- **Tax Receipts**: Ensure your payment integration can generate official charitable donation receipts for Canadian tax purposes
- **PCI Compliance**: Use a PCI-compliant payment processor
- **Currency**: Accept CAD (Canadian Dollars)
- **Recurring Donations**: Consider adding monthly donation options

## Current Button Code (Line ~136)

```tsx
<button className="group relative inline-flex items-center gap-3...">
  <Heart className="w-6 h-6..." />
  <span className="relative z-10">Make a Donation</span>
  <span className="relative z-10 group-hover:translate-x-1...">→</span>
</button>
