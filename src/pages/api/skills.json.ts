import type { APIRoute } from 'astro';
import { skills } from '../../lib/skills';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(skills), {
    headers: { 'Content-Type': 'application/json' },
  });
};
