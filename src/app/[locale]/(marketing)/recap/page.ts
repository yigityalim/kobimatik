import { redirect } from 'next/navigation';

export default function () {
  const lastYear = new Date().getFullYear() - 1;

  redirect(`/recap/${lastYear}`);
}
