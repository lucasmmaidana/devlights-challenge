export default function isValid(string) {
  return fetch('/api', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string: string }),
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}
