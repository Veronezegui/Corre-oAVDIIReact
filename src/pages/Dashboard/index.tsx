import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './styles'
import api from '../../services/api';

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [professores, setProfessores] = useState<Cadastro[]>();

  useEffect(() => {
    api.get(`/teachers`).then((response) => {
      setProfessores(response.data);
    });
  }, []);

  async function deleteProf(id: string) {
    await api.delete(`/teachers/${id}`);
    history.push('/');
  }

  console.log(professores);

  return (
    <Container>
      <ul>
        {professores
          ? professores.map((professor) => (
              <li key={professor.disciplina}>
                <Link to={`/details/${professor.id}`}>
                  {professor.professor}
                </Link>
                <div className="btt">
                <button
                  onClick={() => {
                    deleteProf(professor.id);
                  }}
                >Excluir
                </button>
                </div>
              </li>
            ))
          : ''}
      </ul>
    </Container>
  );
};

export default Dashboard
