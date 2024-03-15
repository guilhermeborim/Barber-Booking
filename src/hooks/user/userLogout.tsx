import Cookies from 'js-cookie'

export const handleLogout = () => {
  try {
    // Verifica se os cookies existem antes de removê-los
    if (Cookies.get('currentUser')) {
      Cookies.remove('currentUser')
    }
    if (Cookies.get('token')) {
      Cookies.remove('token')
    }
    console.log('Cookies removidos com sucesso')

    // Redireciona para a página inicial após a remoção dos cookies
    window.location.href = '/'
  } catch (error) {
    // Tratamento de erros em caso de falha ao remover os cookies
    console.error('Erro ao tentar remover os cookies:', error)
  }
}
