import { initializeApollo } from '@/lib/apollo';
import axios from 'axios';

export async function fetchAPI({ query, variables, token = undefined } = {}) {
  const apollo = initializeApollo();
  const { data } = await apollo.query({
    query,
    variables,
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    },
  });
  return { ...data };
}

export async function postAPI({ mutation, variables, token } = {}) {
  const apollo = initializeApollo();
  const { data } = await apollo.mutate({
    mutation,
    variables,
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    },
  });
  return { ...data };
}

export async function getAvatarUrl(email) {
  const API_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:1337';
  try {
    const { data } = await axios.get(`${API_URL}/avatars/${email}`);
    const { url } = data;
    return url || '';
  } catch (_) {
    //
  }
}
