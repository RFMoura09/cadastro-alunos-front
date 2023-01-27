module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/dashboard',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/adicionar',
        permanent: false,
      },
    ]
  },
}
