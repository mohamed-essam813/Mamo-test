# Mamo technical test

This documentation covers:

- Get Started
- Files Structure
- Stack
- Features
- Theming
- Screenshots

## Get started

To get started you can run the app in development

```sh
git clone https://github.com/mohamed-essam813/Mamo-test.git
cd Mamo-test
yarn
yarn start
```

## File Structure

📦src
┣ 📂assets
┃ ┗ 📂images
┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┗ 📜mamo-pay-logo-business-white.svg
┣ 📂components
┃ ┣ 📂breadCrumbs
┃ ┃ ┣ 📜BreadCrumbs.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂button
┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂layout
┃ ┃ ┣ 📜Layout.tsx
┃ ┃ ┣ 📜Layout.types.ts
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂table
┃ ┃ ┣ 📜PaginationAction.tsx
┃ ┃ ┣ 📜Table.tsx
┃ ┃ ┣ 📜index.ts
┃ ┃ ┗ 📜labelDisplayedRows.tsx
┃ ┗ 📜.DS_Store
┣ 📂data
┃ ┗ 📜invoices.ts
┣ 📂theme
┃ ┣ 📜Colors.ts
┃ ┣ 📜Theme.ts
┃ ┗ 📜index.ts
┣ 📂views
┃ ┣ 📂accountSettings
┃ ┃ ┣ 📜AccountSettings.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂invoices
┃ ┃ ┣ 📂createInvoiceDialog
┃ ┃ ┃ ┣ 📜CreateInvoiceDialog.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂invoiceCard
┃ ┃ ┃ ┣ 📜InvoiceCard.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📜Invoices.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂overview
┃ ┃ ┣ 📜Overview.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂payments
┃ ┃ ┣ 📜Payments.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂paymentsLinks
┃ ┃ ┣ 📜PaymentsLinks.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂settlements
┃ ┃ ┣ 📜Settlements.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📜.DS_Store
┃ ┗ 📜index.ts
┣ 📜.DS_Store
┣ 📜App.tsx
┣ 📜Routes.ts
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜reportWebVitals.ts
┗ 📜setupTests.ts

- `assets`
  images, fonts, ...etc
- `components`
  All components should be in one folder, with no nesting!
  Each component has its own folder, it contains the jsx component itself as well as styles, ...etc.
- `data`
  Data layer and can be used to implement what data layer you want to do, ...etc
- `views`
  A view is what simply what get passed to routes, each page folder should be same as a component folder
- `theme`
  Scroll below for more details about theming

## Stack

This app is built with React.js, Material-UI, Css-in-js.

## Features

- View list of invoices with ability to open form to add or create new invoice

## Theming

📦theme
┣ 📜Colors.ts
┣ 📜Theme.ts
┗ 📜index.ts

Allows for keeping consistency and easy customization for all design aspects of the app.

Imagine that you have to update the border-radius of over a 100 components, instead it should be done with a single line of code.

Material-UI provides a greate api `ThemeProvider`, for customizing its own components or even changing their default props.

Customization here includes palette, typography, mixins, animation keyframes/transitions, shadows, spacing, breakpoints, border-radius and z-index. (This could be done without material-ui as well).

## Screenshots

<img width="1438" alt="Screen Shot 2022-10-10 at 5 05 00 PM" src="https://user-images.githubusercontent.com/29519234/194902414-cdfddff7-5b63-452e-a0b3-4759c291e4de.png">
<img width="722" alt="Screen Shot 2022-10-10 at 5 24 35 PM" src="https://user-images.githubusercontent.com/29519234/194902425-39d246b6-d19b-49af-9efc-e6d65c4b81e0.png">
<img width="473" alt="Screen Shot 2022-10-10 at 5 26 25 PM" src="https://user-images.githubusercontent.com/29519234/194902428-ae4ed6ea-53d0-467a-bcbb-6b98e653f348.png">

---

<img width="476" alt="Screen Shot 2022-10-10 at 5 27 00 PM" src="https://user-images.githubusercontent.com/29519234/194903196-52eaaa50-172e-4516-b46e-944b932c27fc.png">
<img width="796" alt="Screen Shot 2022-10-10 at 5 28 05 PM" src="https://user-images.githubusercontent.com/29519234/194903203-dc40b6e0-d074-4c15-b42a-e168f628138b.png">

---

<img width="463" alt="Screen Shot 2022-10-10 at 5 27 22 PM" src="https://user-images.githubusercontent.com/29519234/194903277-b9a1399a-3f99-4725-b807-8d10fd6f5ebd.png">
<img width="788" alt="Screen Shot 2022-10-10 at 5 27 53 PM" src="https://user-images.githubusercontent.com/29519234/194903290-dd2a07d4-f6c9-4b58-84a2-338c6d04fde4.png">
