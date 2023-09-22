import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de um amigo secreto', () => {

  test('cada participante não sorteie o próprio nome', () => {

    const participantes = [
      'Ana',
      'Juliana',
      'Catarina',
      'João',
      'Vinicios',
      'Nathália'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})