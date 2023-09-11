import React from 'react';

const Agenda = ({ consultas }) => {
  // Separe os horários em manhã e tarde
  const manha = Array.from({ length: 6 }, (_, index) => (
    <span key={index}>
      {`${index + 8}:00 AM - `}
      <span className="text-green-500">Livre</span>
    </span>
  ));
  const tarde = Array.from({ length: 6 }, (_, index) => (
    <span key={index}>
      {`${index + 1}:00 PM - `}
      <span className="text-green-500">Livre</span>
    </span>
  ));

  // Mapeie as consultas agendadas e preencha os horários ocupados com os nomes dos pacientes
  consultas.forEach((consulta) => {
    const horaConsulta = consulta.hora.substring(0, 2); // Extrai a hora da consulta
    const indexHorario = parseInt(horaConsulta);
    if (indexHorario >= 8 && indexHorario < 14) {
      // Se a consulta estiver na manhã
      const indexManha = indexHorario - 8;
      manha[indexManha] = (
        <span key={indexManha}>
          {`${horaConsulta}:00 AM - `}
          <span className="text-red-500">{consulta.paciente}</span>
        </span>
      );
    } else if (indexHorario >= 13 && indexHorario < 19) {
      // Se a consulta estiver na tarde
      const indexTarde = indexHorario - 13;
      tarde[indexTarde] = (
        <span key={indexTarde}>
          {`${horaConsulta}:00 PM - `}
          <span className="text-red-500">{consulta.paciente}</span>
        </span>
      );
    }
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Agenda de Consultas</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Manhã</h3>
          <ul>
            {manha.map((horario, index) => (
              <li key={index} className="py-2">
                {horario}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tarde</h3>
          <ul>
            {tarde.map((horario, index) => (
              <li key={index} className="py-2">
                {horario}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
