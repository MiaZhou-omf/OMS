// Questions follow the topic order on the OneMain Solutions FAQ.
// Answers are concise prototype summaries; each links to the current official answer.
const faqs = {
  'Premium Payments': [
    ['How is the premium collected?', 'Credit insurance premiums are typically part of the loan payment. Payment methods for other insurance vary by product.', 'how-is-the-premium-collected'],
    ['How can I pay my Merit Life premium payments?', 'Pay by mail to American Health and Life Insurance Company, P.O. Box 39, Evansville, IN 47701, or pay online through the Make a Merit Payment link below. Phone and credit or debit card payments are not accepted.', 'how-can-i-pay-my-merit-life-plus-premium-payments', true],
    ['How do I set up automatic premium payments to be deducted from my bank account?', 'Complete a Change of Policy/Certificate Request Form to set up bank account deductions.', 'how-do-i-set-up-automatic-premium-payments'],
    ['How do I change the bank account from which premium payments are deducted?', 'Complete and return a Change of Policy/Certificate Request Form with your new bank account details.', 'how-do-i-change-the-bank-account'],
    ['How do I change the frequency of my automatic premium payment?', 'Choose the new frequency in the payment method section of the Change of Policy/Certificate Request Form.', 'how-do-i-change-the-frequency']
  ],
  'Policy Service': [
    ['How do I change my beneficiary?', 'Complete and return a Beneficiary Change Form signed by the policyowner.', 'how-do-i-change-my-beneficiary'],
    ['How do I change my address?', 'Use the mailing address or phone number section of the Change of Policy/Certificate Request Form.', 'how-do-i-change-my-address'],
    ['How do I request a copy of my policy/certificate?', 'Call 1-800-307-0048 or visit your local OneMain branch to request a copy.', 'how-do-i-request-a-copy'],
    ['Can I cancel my insurance?', 'Voluntary coverage may be canceled using a Cancellation Request Form or by calling 833-585-1869. Review the official answer for product-specific details.', 'can-i-cancel-my-insurance']
  ],
  General: [
    ['What are your hours of operation?', 'Monday through Friday, 8:00 a.m. to 8:00 p.m. Eastern Time.', 'what-are-your-hours-of-operation'],
    ['How do I contact the insurance company?', 'Call 1-800-307-0048 or use the contact options on this page.', 'how-do-i-contact-the-insurance-company'],
    ['How do I file a claim?', 'Find the appropriate claim form, follow its instructions, and submit the required documents. Call 1-800-307-0048 if you need help choosing a form.', 'how-do-i-file-a-claim'],
    ['If I choose to submit my claim information by email, is there a specific file type I should use for my email attachments?', 'Use PDF, JPG, TIF, or PNG attachments. Email is not a secure channel for personal claim discussions.', 'submit-my-claim-info'],
    ['How do I sign up to receive SMS/Text updates on my Credit Disability, Involuntary Unemployment, or GAP claim?', 'Sign up for claim text updates through the official website or ask a customer representative for help.', 'sign-up-to-receive-sms'],
    ['When is a claim number assigned and where do I locate my claim number?', 'A number is assigned after the initial claim information is received. Look for it on claim correspondence and mailed forms.', 'when-is-claim-number-assigned'],
    ['How long does it take to process a claim?', 'Claims are generally processed within 7 to 10 business days after all required information is received.', 'how-long-does-it-take']
  ],
  'Claims – Life': [
    ['Is an original death certificate required?', 'Usually no, although an original certified copy may be requested.', 'is-an-original-death-certificate-required'],
    ['There are multiple beneficiaries on this term life policy. Do we each need to complete a claim form?', 'Yes. Each named beneficiary needs to complete the Beneficiary Information section.', 'there-are-multiple-beneficiaries'],
    ['Will I receive a 1099 tax form as a beneficiary?', 'Interest earned on a death benefit may be taxable and may be reported on a 1099-INT. Review the official answer for details.', 'will-i-receive-1099-tax']
  ],
  'Claims – Disability': [
    ['How are disability benefits paid and to whom are benefits paid?', 'Credit Disability benefits are generally paid to the lender and applied to the account. Disability Income Protection benefits are paid to the insured.', 'how-are-disability-benefits-paid'],
    ['What happens if my doctor charges me to complete a claim form?', 'The insured is responsible for costs associated with completing a claim form.', 'doctor-charges-me-claim'],
    ['If I am receiving Social Security Disability benefits, do I still need to submit a claim form?', 'Yes. A physician must still verify the disability on the claim form.', 'if-i-am-receiving-ssd-benefits'],
    ['If my coverage has a waiting period, when should I complete the claim form?', 'Sign and date the form after the applicable waiting period. Check your certificate or policy for the period that applies.', 'if-my-coverage-has-a-waiting-period'],
    ['If I am totally and permanently disabled, will credit disability insurance pay off my loan?', 'Benefits depend on your coverage, account status, disability status, and submitted information. An early payoff is not a standard policy provision.', 'if-i-am-totally-and-permanently-disabled'],
    ['Are there any exclusions in my disability coverage?', 'Yes. Review your certificate or policy for the exclusions that apply.', 'are-there-any-exclusions']
  ],
  'Claims – Involuntary Unemployment': [
    ['What information should I provide regarding my previous employer/employment?', 'If requested, provide a document showing when and why employment ended, such as a layoff or separation letter.', 'what-info-should-i-provide'],
    ['If my coverage has a waiting period, when should I file a claim?', 'Sign and date the claim after the applicable waiting period, often 30 consecutive days. Check your certificate.', 'if-my-coverage-has-a-waiting-period-2'],
    ['What if I am not yet receiving state unemployment benefits?', 'Submit your claim to begin the review while the state makes its determination.', 'what-if-i-am-not-yet-receiving-state'],
    ['I have filed an appeal with the state unemployment office. Can I still file a claim?', 'Yes. Submit the claim and provide proof of state benefit payments if the state reverses its decision.', 'i-have-filed-an-appeal-with-the-state'],
    ['What if I am receiving severance/final vacation/sick pay?', 'Submit a claim and paperwork from your employer explaining those payments.', 'what-if-i-am-receiving-severance'],
    ['I was denied state unemployment benefits. Can I still file a claim?', 'Yes. Submit a completed claim form and the state notice explaining the denial.', 'i-was-denied-state'],
    ['Why do I need to provide my employer contact information?', 'The insurer may need to verify your employment information.', 'why-do-i-need-to-provide'],
    ['Why do I need to send benefit information from the state unemployment office?', 'It helps verify eligibility and continued registration for work under your certificate.', 'why-do-i-need-to-send-benefit'],
    ['What information do I submit if my state unemployment benefits are exhausted and I am still unemployed?', 'Provide documentation showing you remain involuntarily unemployed and actively registered for work.', 'what-info-do-i-submit'],
    ['How are my unemployment benefits paid and to whom are benefits paid?', 'Credit IUI benefits are generally paid to the lender and applied to your account.', 'how-are-my-unemployment-benefits-paid'],
    ['What if I voluntarily quit my job?', 'Voluntary resignation is generally excluded. Review the official answer for circumstances involving a state determination of just cause.', 'what-if-i-voluntarily-quit'],
    ['If involuntary unemployment benefits are issued, will I receive a 1099 MISC tax form?', 'A 1099 form is issued when Credit IUI benefits meet the reporting threshold in a tax year.', 'if-involuntary-unemployment-benefits']
  ],
  'Collateral Protection Insurance (CPI)': [
    ['How do I provide proof of my current insurance?', 'Upload insurance documents at MyInsuranceInfo.com or use the instructions in the letter or text you received.', 'how-do-i-provide-proof'],
    ['What types of insurance documents are acceptable proof of insurance?', 'An active declarations page or binder showing the required coverage and OneMain Financial as lienholder is generally accepted.', 'what-types-of-insurance'],
    ['What types of insurance documents are not acceptable proof of insurance?', 'Insurance cards, applications, quotes, and documents missing the required lienholder information are not accepted.', 'what-types-of-ins-docs'],
    ['What is the lienholder/loss payee address?', 'OneMain Financial, PO Box 3910, Carmel, IN 46082.', 'what-is-the-lienholder'],
    ['What does CPI cover?', 'CPI covers physical damage to the insured collateral during the coverage period. It does not provide liability coverage.', 'what-does-cpi-cover'],
    ['Is vehicle rental expense covered?', 'No. CPI rental expenses are not covered.', 'is-vehicle-rental'],
    ['Is there an insurance card for this CPI auto policy?', 'No. CPI does not provide liability coverage, so there is no insurance card.', 'is-there-an-ins-card'],
    ['What does CPI coverage pay?', 'Payment depends on repair cost, actual cash value, loan balance, policy limits, and the deductible.', 'what-does-cpi-coverage'],
    ["Why didn't the insurance pay the actual cash value of my vehicle under my CPI coverage?", 'CPI claim payments cannot exceed the loan account balance.', 'why-didnt-the-ins'],
    ["After my accident, the police towed my vehicle and I don't know its current location to file a claim. What should I do?", 'Contact the police or local tow companies, then call 1-800-307-0048 with the vehicle location.', 'after-my-accident'],
    ['How do I obtain funds to make repairs?', 'CPI claim payments go directly to the lender because the lender is the first named insured.', 'how-do-i-obtain-funds'],
    ['Pictures of my claim damage are on my phone. How can I send them to OneMain Solutions?', 'Email the pictures with your name and account or claim number to insclaims@omf.com.', 'pictures-of-my-claim'],
    ['How do I obtain a police/fire report?', 'Contact the department that responded to the incident for a copy of its report.', 'how-do-i-obtain-police'],
    ['If my vehicle is a total loss, will I be required to submit for a salvage title?', 'Some states require a salvage title if you keep the vehicle after a total loss.', 'if-my-vehicle-total']
  ],
  'Claims – Guaranteed Asset Protection (GAP)': [
    ['I purchased GAP and my covered vehicle has been in an accident. Should I file a claim?', 'Yes, if the covered vehicle was deemed a total loss.', 'i-purchased-gap-and-my-covered-vehicle'],
    ['When should I file a claim?', 'File after the primary insurer has finalized its claim.', 'when-should-file-claim'],
    ['What documents do I need to provide with my completed claim form?', 'Provide the primary insurer’s valuation report and final settlement determination.', 'documents-need-to-provide']
  ]
};
