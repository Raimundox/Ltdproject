"use client";

import { useState } from "react";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import Agenda from "../../components/appointments";
import Head from "next/head";

const Dashboard = () => {
  // Dados fictícios para demonstração
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "João Silva",
      gender: "Masculino",
      age: 30,
      therapyBefore: true
    },
    {
      id: 2,
      name: "Maria Souza",
      gender: "Feminino",
      age: 25,
      therapyBefore: false
    },
    {
      id: 3,
      name: "Carlos Santos",
      gender: "Masculino",
      age: 40,
      therapyBefore: true
    }
    // Adicione mais pacientes conforme necessário
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, date: "2023-09-29", time: "19:00", patientId: 1 }
    // Adicione mais agendamentos conforme necessário
  ]);

  const [patientActivity, setPatientActivity] = useState([
    { id: 1, date: "2023-09-29", time: "11:00", status: "Livre" }
    // Adicione mais atividades conforme necessário
  ]);

  // Lógica para calcular o resumo
  const today = new Date();
  const upcomingAppointments = appointments.filter(
    (appointment) => new Date(appointment.date + "T" + appointment.time) > today
  );

  const pendingActivities = patientActivity.filter(
    (activity) => new Date(activity.date + "T" + activity.time) > today
  );

  // Lógica para gráficos
  const malePatients = patients.filter(
    (patient) => patient.gender === "Masculino"
  );
  const femalePatients = patients.filter(
    (patient) => patient.gender === "Feminino"
  );
  const patientsWithTherapy = patients.filter(
    (patient) => patient.therapyBefore
  );
  const patientsWithoutTherapy = patients.filter(
    (patient) => !patient.therapyBefore
  );

  const [userData, setUserData] = useState({
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Novos Pacientes por Periodo",
        data: [10, 15, 20, 12],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [userData1, setUserData1] = useState({
    labels: ["True", "False"],
    datasets: [
      {
        label: "Já fez terapia antes?",
        data: [10, 15],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [userData2, setUserData2] = useState({
    labels: ["Feminino", "Masculino"],
    datasets: [
      {
        label: "N° de pacientes por sexo",
        data: [10, 15],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [userData3, setUserData3] = useState({
    labels: [
      "Fundamental Completo",
      "Medio Completo",
      "Superior Incompleto",
      "Superior Completo"
    ],
    datasets: [
      {
        label: "N° de pacientes por escolaridade",
        data: [4, 10, 6, 5],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const consultasAgendadas = [
    { hora: "09:00", paciente: "Gusttavo Lima" },
    { hora: "14:00", paciente: "Gabriel" }
    // Adicione mais consultas conforme necessário
  ];
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-2 mb-2">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Dashboard do Psicólogo
        </h1>

        <section className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Boa tarde,{" "}
            <p className="text-base sm:text-2xl mb-1">Dr. João da Silva!</p>
          </h2>

          <p>
            ⛅Sua próxima consulta é em{" "}
            {upcomingAppointments.length > 0
              ? `dia ${upcomingAppointments[0].date}, às ${upcomingAppointments[0].time}.`
              : "não há consultas agendadas."}
          </p>
          <p>
            Você possui {appointments.length} agendamento
            {appointments.length !== 1 ? "s" : ""} hoje e{" "}
            {patientActivity.length}h livre
            {patientActivity.length !== 1 ? "s" : ""}.
          </p>
        </section>

        <section className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Resumo</h2>
          <div className="flex flex-wrap gap-4 sm:flex-nowrap">
            <div className="bg-blue-200 p-4 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-semibold mb-2">Total de Pacientes</h3>
              <p className="text-2xl font-bold">{patients.length}</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Pacientes Atendidos
              </h3>
              <p className="text-2xl font-bold">
                {patients.length - pendingActivities.length}
              </p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Atividades Pendentes
              </h3>
              <p className="text-2xl font-bold">{pendingActivities.length}</p>
            </div>
            <div className="bg-red-200 p-4 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-semibold mb-2">Consultas Hoje</h3>
              <p className="text-2xl font-bold">
                {upcomingAppointments.length}
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/5 mb-4">
            {/* Outros componentes e conteúdo do aplicativo */}
            <Agenda consultas={consultasAgendadas} />
          </div>
          <div className="w-full md:mx-4 sm:w-1/3 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Pacientes | Online
              </h2>
              <h3 className="text-3xl">3</h3>
              <p>35% do Total</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Pacientes | Presencial
              </h2>
              <h3 className="text-3xl">5</h3>
              <p>65% do Total</p>
            </div>
          </div>
        </div>

        <section className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Gráficos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <LineChart chartData={userData} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <BarChart chartData={userData1} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <PieChart chartData={userData2} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <BarChart chartData={userData3} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
