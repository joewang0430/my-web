import { redirect } from 'next/navigation';

export default function ProjectPage() {
  redirect('/profile#projects');
}
