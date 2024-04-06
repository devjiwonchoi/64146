import { headers } from 'next/headers';

export default async function NotFound() {
  const headerList = headers();
  const acceptLanguage = headerList.get('accept-language');

  return (
    <div>
      <p>404 - Page Not Found</p>
      <p>accept-language: {acceptLanguage}</p>
    </div>
  );
}