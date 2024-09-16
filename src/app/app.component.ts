import { Component } from '@angular/core';
import { Experience } from './experience/experience.component';
import { EducationalBackground, EducationalInstitution } from './academy/academy.component';
import { Skill } from './skill/skill.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  experiences: Experience[] = [];
  educationals: EducationalBackground[] = [];
  skills: Skill[] = [];

  constructor() {
    this.experiences.push({
      business: 'Convergência',
      profession: 'Fullstack Engineer', 
      period: { 
        start: 2022, 
        end: undefined 
      }, 
      description: 'Colaborador terceirizado alocado no Supremo Tribunal Federal, responsável por construir os componentes de front-end e back-end utilizando técnicas de design de projetos de software e desenvolvimento orientado a testes para produzir componentes sem débito técnico.', 
      practices: [
        'arquitetura e desenvolvimento de componentes de front-end usando Javascript, NodeJS, Angular, Angular Material, HTML, CSS, TypeScript e SASS, Webpack;',
        'arquitetura e desenvolvimento de componentes de back-end usando Java Spring Framework, Spring Boot, Spring Cloud, JPA, Activiti, Maven;',
        'armazenamento de dados usando SQL (Oracle) e NoSQL (Cassandra, Redis, Elasticsearch e S3);',
        'design de soluções usando Domain-Driven Design;',
        'práticas e tecnologias para revisão de código, código limpo, programação segura, refatoração, desenvolvimento orientado a testes (TDD) e integração contínua;',
        'práticas e tecnologias para testes automatizados;',
        'containers usando Docker e Kubernetes;',
        'CI/CD;',
        'metodologias ágeis, incluindo Scrum e Kanban;',
      ]
    },
    {
      business: 'Noovi',
      profession: 'Software Engineer',
      period: {
        start: 2022,
        end: 2022
      },
      description: `
        Responsabilidades:
          Desenvolvimento e sustentação de aplicações voltadas para
          telefonia, com integrações em softwares de clientes, utilizando: 
      `,
      practices: [
        'JSE',
        'JEE',
        'JSF',
        'Primefaces',
        'Spring Boot',
        'Hibernate',
        'Entity Manager',
        'Maven',
        'Apis REST',
        'Banco de dados Oracle',
        'Criação, manutenção e refatoração de softwares desenvolvidos na plataforma .NET',
      ]
    },
    {
      business: 'M2G',
      profession: 'DevOps Engineer',
      period: {
        start: 2021,
        end: 2022
      },
      description: '',
      practices: [
        'Liderança da equipe técnica: Desenvolvimento, sustentação e qualidade de software',
        'Gerenciamento de entregas',
        'Redução da complexidade e facilitação da integração entre as equipes',
        'Identificação e planejamento de melhorias/correções em softwares legados',
        'Promoção da evolução contínua através da prática DevOps, utilizando CI/CD',
        'Remodelagem de arquitetura de software com foco em sistemas críticos',
        'Desenvolvimento de integrações entre canais digitais como WhatsApp, E-mail, e o CRM da empresa, utilizando Java, Apis RESTful, RabbitMQ, bancos de dados relacionais como SQL Server e MySQL, e Service Discovery utilizando Netflix Eureka, Netflix Zuul e NGINX',
      ]
    },
    {
      business: 'M2G',
      profession: 'Software Engineer',
      period: {
        start: 2014,
        end: 2020
      },
      description: '',
      practices: [
        'Atuação em desenvolvimento, manutenção, e suporte à sistemas críticos no segmento de saúde (backend e frontend) utilizando: Java, C#, ASP.NET, ASP.NET MVC, Javascript, AJAX, Classic ASP, Scala',
        'Webservices RESTful e SOAP',
        'Code review',
        'GIT e SVN',
        'Modelagem de bancos de dados relacionais como MySQL e SQL Server. Criação, manutenção, e otimização de procedures, funções e triggers',
        'Eventuais visitas a clientes para análise, suporte e pequenas consultorias',
      ]
    },
    {
      business: 'M2G',
      profession: 'Software Engineer',
      period: {
        start: 2013,
        end: 2014
      },
      description: 'Atuação no desenvolvimento e manutenção de websites em JSP, JSF, JQuery, Banco de Dados MySQL, e Eclipse IDE.',
      practices: []
    }, 
    {
      business: 'Rewar',
      profession: 'Rollout Analyst',
      period: {
        start: 2011,
        end: 2012
      },
      description: 'Atualização de equipamentos de hardware em clientes como Bayer, Porto Seguro, ...',
      practices: []
    });

    this.experiences.sort((a, b) => {
      if (a.period.start > b.period.start) {
        return -1;
      }

      if (a.period.start < b.period.start) {
        return 1;
      }
      return 0;
    });

    this.educationals.push(
      {
        institution: EducationalInstitution.FIAP,
        name: 'Pós graduação Lato Sensu, Software Architecture',
        period: {
          start: new Date(2023, 7, 1),
          end: new Date(2024, 8, 30)
        }
      },
      {
        institution: EducationalInstitution.FIAP,
        name: 'Master of Business Administration (MBA), Big Data',
        period: {
          start: new Date(2015, 3, 1),
          end: new Date(2016, 6, 1)
        }
      },
      {
        institution: EducationalInstitution.ANHANGUERA,
        name: 'Graduação em Análise e Desenvolvimento de Sistemas',
        period: {
          start: new Date(2010, 2, 1),
          end: new Date(2012, 6, 1)
        }
      }
    );

    this.skills.push(
      {
        name: 'Teamwork and leadership',
        description: 'Product-oriented development soft skills, with great communication with peers, leadership and clients.'
      },
      {
        name: 'Languages and Frameworks',
        description: 'Javascript + Typescript, Node.js, HTML5, SASS, Angular v1, Angular 2+, React, Vue.js, jQuery, C#, .Net, Python, Django, Ruby, Ruby on Rails, Elixir, Bash'
      },
      {
        name: 'Databases',
        description: 'SQL such as PostgreSQL, MySQL, SQLite, MSSQL and Oracle; NoSQL as AWS DynamoDB, MongoDB, Redis'
      },
      {
        name: 'Infrastructure',
        description: 'AWS, Google Cloud, Firebase, Heroku, CircleCI, Codefresh, Jenkins'
      }
    );
  }
}
