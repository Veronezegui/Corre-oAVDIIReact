import React, { useEffect, useState } from 'react'
import { RouteComponentProps} from 'react-router-dom'
import { Container, Disciplinas , Form} from './styles'
import api from '../../services/api';


interface ProfID {
  id: string;
}

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
  id: string;
}

const Details: React.FC<RouteComponentProps<ProfID>> = props => {
  const { match } = props;
  const { id } = match.params;

  const [professores, setProfessores] = useState<Cadastro>();

  const [disciplina, setDisciplina] = useState('');
  const [professor, setProfessor] = useState('');
  const [diasemana, setDiasemana] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [horario, setHorario] = useState('');

  const loadDataTeacher = async () => {
    const dataProf = await api
      .get(`/teachers/${id}`)
      .then(response => response.data);

    setProfessores(dataProf);
  };
  async function handleAddProfessores(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const novoCadastro = {
      disciplina: form.disciplina.value,
      professor: form.professor.value,
      diasemana: form.diasemana.value,
      periodo: form.periodo.value,
      horario: form.horario.value,
    };

    console.log(novoCadastro)


    await api.put(`/teachers/${id}`, novoCadastro).then(response => {
      window.location.href = `/`;
    });



  }  useEffect(() => {
    loadDataTeacher();
  }, [id]);

  return (
    <Container>
      <Disciplinas>
      {professores ? (
          <Form onSubmit={handleAddProfessores}>
            <h1>Detalhes</h1>
            <input
              type="text"
              name ="disciplina"
              defaultValue = {professores.disciplina}
              placeholder ={disciplina}
              onChange={(event) => setDisciplina(event.target.value)}
            />
            <input
              type="text"
              name ="professor"
              defaultValue = {professores.professor}
              placeholder ={professor}
              onChange={(event) => setProfessor(event.target.value)}
            />
            <input
              type="text"
              name ="diasemana"
              defaultValue = {professores.diasemana}
              placeholder ={diasemana}
              onChange={(event) => setDiasemana(event.target.value)}
            />
            <input
              type="text"
              name ="periodo"
              defaultValue = {professores.periodo}
              placeholder={professores.periodo}
              onChange={(event) => setPeriodo(event.target.value)}
            />
            <input
              type="text"
              name ="horario"
              defaultValue = {professores.horario}
              placeholder ={horario}
              onChange={(event) => setHorario(event.target.value)}
            />
            <button type="submit">Alterar</button>
          </Form>
        ) : (
          'Carregando...'
        )}
      </Disciplinas>
    </Container>
  );
};

export default Details;
