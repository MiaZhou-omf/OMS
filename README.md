# OneMain Solutions clickable prototype

Portable static website. ChatGPT sign-in is not required by this application.

## Publish with GitHub Pages

1. Use a OneMain-approved repository with GitHub Pages enabled by its administrator.
2. Upload these files at the repository root, keeping the assets directory intact.
3. In Settings > Pages, select Deploy from a branch, choose the approved branch, and select /(root). Save.
4. Use the published URL shown in Settings > Pages.

GitHub organization policies and the repository administrator determine whether the published site is public or restricted to enterprise users. A private repository alone does not make its Pages site private. Confirm the intended audience before enabling publication. Restricted sites may require GitHub/enterprise sign-in; they do not require ChatGPT.

No build command, package installation, API keys, or server code are needed. Hash routes work under a repository subpath. The print button opens assets/credit-life-insurance.pdf, which includes the OneMain Solutions logo.

## Publish on another approved web server

Serve this directory over HTTPS with index.html as the default document. Asset paths are relative. No route rewrite is required because application routes use URL fragments.

## Prototype behavior

Payments and uploads are simulated. Entered information is not submitted to a backend. Some links open official OneMain Solutions pages. Expanded state groups are illustrative prototype data.
