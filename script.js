// ==========================================
// CAREERMIND - JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MENU MOBILE
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });

        const links = nav.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
            });
        });
    }


    // ==========================================
    // FORMULÁRIO DE PERFIL
    // ==========================================

    const profileForm = document.getElementById("profileForm");

    const formSteps = document.querySelectorAll(".form-step");
    const steps = document.querySelectorAll(".step");

    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");
    const saveBtn = document.getElementById("saveBtn");

    const formProgress = document.getElementById("formProgress");
    const stepText = document.getElementById("stepText");

    const profileSuccess = document.getElementById("profileSuccess");

    let currentFormStep = 1;


    // ==========================================
    // MOSTRAR ETAPA DO FORMULÁRIO
    // ==========================================

    function showFormStep(stepNumber) {

        formSteps.forEach(function (step) {

            const number = Number(step.getAttribute("data-form-step"));

            if (number === stepNumber) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }

        });


        // Atualiza os círculos das etapas

        steps.forEach(function (step) {

            const number = Number(step.getAttribute("data-step"));

            if (number <= stepNumber) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }

        });


        // Atualiza barra de progresso

        if (formProgress) {
            const percentage = (stepNumber / 3) * 100;
            formProgress.style.width = percentage + "%";
        }


        // Atualiza texto

        if (stepText) {
            stepText.textContent = "Etapa " + stepNumber + " de 3";
        }


        // Botão voltar

        if (backBtn) {

            if (stepNumber === 1) {
                backBtn.style.visibility = "hidden";
            } else {
                backBtn.style.visibility = "visible";
            }

        }


        // Botão continuar

        if (nextBtn) {

            if (stepNumber === 3) {
                nextBtn.classList.add("hidden");
            } else {
                nextBtn.classList.remove("hidden");
            }

        }


        // Botão salvar

        if (saveBtn) {

            if (stepNumber === 3) {
                saveBtn.classList.remove("hidden");
            } else {
                saveBtn.classList.add("hidden");
            }

        }

    }


    // ==========================================
    // VALIDAR FORMULÁRIO
    // ==========================================

    function validateFormStep(stepNumber) {

        const requiredFields = {

            1: [
                "nome",
                "email",
                "curso",
                "periodo"
            ],

            2: [
                "habilidades",
                "interesses"
            ],

            3: [
                "objetivo",
                "horas",
                "prazo"
            ]

        };


        let valid = true;


        // Limpa mensagens antigas

        const currentStep = document.querySelector(
            '.form-step[data-form-step="' + stepNumber + '"]'
        );


        if (!currentStep) {
            return true;
        }


        const errors = currentStep.querySelectorAll(".error");

        errors.forEach(function (error) {
            error.textContent = "";
        });


        const invalidFields = currentStep.querySelectorAll(".invalid");

        invalidFields.forEach(function (field) {
            field.classList.remove("invalid");
        });


        // Verifica campos obrigatórios

        const fields = requiredFields[stepNumber];


        if (fields) {

            fields.forEach(function (id) {

                const field = document.getElementById(id);

                if (!field) {
                    return;
                }


                if (field.value.trim() === "") {

                    valid = false;

                    field.classList.add("invalid");

                    const error = field.parentElement.querySelector(".error");

                    if (error) {
                        error.textContent =
                            "Preencha este campo para continuar.";
                    }

                }

            });

        }


        // Validação simples do e-mail

        if (stepNumber === 1) {

            const email = document.getElementById("email");

            if (
                email &&
                email.value.trim() !== "" &&
                !email.value.includes("@")
            ) {

                valid = false;

                email.classList.add("invalid");

                const error =
                    email.parentElement.querySelector(".error");

                if (error) {
                    error.textContent =
                        "Digite um e-mail válido.";
                }

            }

        }


        return valid;

    }


    // ==========================================
    // BOTÃO CONTINUAR
    // ==========================================

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            const valid = validateFormStep(currentFormStep);

            if (!valid) {
                return;
            }


            if (currentFormStep < 3) {

                currentFormStep++;

                showFormStep(currentFormStep);

            }

        });

    }


    // ==========================================
    // BOTÃO VOLTAR
    // ==========================================

    if (backBtn) {

        backBtn.addEventListener("click", function () {

            if (currentFormStep > 1) {

                currentFormStep--;

                showFormStep(currentFormStep);

            }

        });

    }


    // ==========================================
    // DADOS FICTÍCIOS
    // ==========================================

    const testDataBtn =
        document.getElementById("testDataBtn");


    if (testDataBtn) {

        testDataBtn.addEventListener("click", function () {


            // ETAPA 1

            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const curso = document.getElementById("curso");
            const periodo = document.getElementById("periodo");


            if (nome) {
                nome.value = "Ana Clara Souza";
            }

            if (email) {
                email.value = "ana.clara@email.com";
            }

            if (curso) {
                curso.value = "Engenharia de Computação";
            }

            if (periodo) {
                periodo.value = "2º período";
            }


            // ETAPA 2

            const habilidades =
                document.getElementById("habilidades");

            const materias =
                document.getElementById("materias");

            const certificados =
                document.getElementById("certificados");

            const projetos =
                document.getElementById("projetos");

            const experiencias =
                document.getElementById("experiencias");

            const interesses =
                document.getElementById("interesses");


            if (habilidades) {
                habilidades.value =
                    "Lógica, programação, criatividade, comunicação";
            }

            if (materias) {
                materias.value =
                    "Cálculo, Programação Estruturada e Física";
            }

            if (certificados) {
                certificados.value =
                    "Curso de Excel e Introdução à Programação";
            }

            if (projetos) {
                projetos.value =
                    "Projeto acadêmico de desenvolvimento de aplicativo";
            }

            if (experiencias) {
                experiencias.value =
                    "Projeto universitário realizado em equipe";
            }

            if (interesses) {
                interesses.value =
                    "Tecnologia, desenvolvimento e inovação";
            }


            // ETAPA 3

            const objetivo =
                document.getElementById("objetivo");

            const horas =
                document.getElementById("horas");

            const prazo =
                document.getElementById("prazo");


            if (objetivo) {
                objetivo.value =
                    "Conseguir um estágio na área de tecnologia";
            }

            if (horas) {
                horas.value = "7 a 10 horas";
            }

            if (prazo) {
                prazo.value = "6 meses";
            }


            // Remove possíveis mensagens de erro

            const invalid =
                document.querySelectorAll(".invalid");

            invalid.forEach(function (field) {
                field.classList.remove("invalid");
            });


            const errors =
                document.querySelectorAll(".error");

            errors.forEach(function (error) {
                error.textContent = "";
            });


            // Volta para a primeira etapa

            currentFormStep = 1;

            showFormStep(currentFormStep);


            alert(
                "Dados fictícios preenchidos com sucesso!"
            );

        });

    }


    // ==========================================
    // SALVAR PERFIL
    // ==========================================

    if (profileForm) {

        profileForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const valid =
                validateFormStep(currentFormStep);


            if (!valid) {
                return;
            }


            // Pega os dados

            const profileData = {

                nome:
                    document.getElementById("nome").value,

                email:
                    document.getElementById("email").value,

                curso:
                    document.getElementById("curso").value,

                periodo:
                    document.getElementById("periodo").value,

                habilidades:
                    document.getElementById("habilidades").value,

                materias:
                    document.getElementById("materias").value,

                certificados:
                    document.getElementById("certificados").value,

                projetos:
                    document.getElementById("projetos").value,

                experiencias:
                    document.getElementById("experiencias").value,

                interesses:
                    document.getElementById("interesses").value,

                objetivo:
                    document.getElementById("objetivo").value,

                horas:
                    document.getElementById("horas").value,

                prazo:
                    document.getElementById("prazo").value

            };


            // Salva no navegador

            localStorage.setItem(
                "careerMindProfile",
                JSON.stringify(profileData)
            );


            // Esconde formulário

            profileForm.classList.add("hidden");


            const stepsContainer =
                document.querySelector(".steps");

            if (stepsContainer) {
                stepsContainer.classList.add("hidden");
            }


            const progressContainer =
                document.querySelector(".progress-top");

            if (progressContainer) {
                progressContainer.classList.add("hidden");
            }


            // Mostra mensagem de sucesso

            if (profileSuccess) {
                profileSuccess.classList.remove("hidden");
            }

        });

    }


    // ==========================================
    // DIAGNÓSTICO
    // ==========================================

    const questions =
        document.querySelectorAll(".question");

    const questionCounter =
        document.getElementById("questionCounter");

    const questionProgress =
        document.getElementById("questionProgress");

    const diagnosisBack =
        document.getElementById("diagnosisBack");

    const diagnosisNext =
        document.getElementById("diagnosisNext");

    const finishDiagnosis =
        document.getElementById("finishDiagnosis");

    const resultCard =
        document.getElementById("resultCard");

    const restartDiagnosis =
        document.getElementById("restartDiagnosis");


    let currentQuestion = 1;


    // ==========================================
    // MOSTRAR PERGUNTA
    // ==========================================

    function showQuestion(questionNumber) {

        questions.forEach(function (question) {

            const number =
                Number(question.getAttribute("data-question"));


            if (number === questionNumber) {
                question.classList.add("active");
            } else {
                question.classList.remove("active");
            }

        });


        if (questionCounter) {

            questionCounter.textContent =
                "Pergunta " +
                questionNumber +
                " de 3";

        }


        if (questionProgress) {

            const percentage =
                (questionNumber / 3) * 100;

            questionProgress.style.width =
                percentage + "%";

        }


        if (diagnosisBack) {

            if (questionNumber === 1) {
                diagnosisBack.style.visibility = "hidden";
            } else {
                diagnosisBack.style.visibility = "visible";
            }

        }


        if (diagnosisNext) {

            if (questionNumber === 3) {
                diagnosisNext.classList.add("hidden");
            } else {
                diagnosisNext.classList.remove("hidden");
            }

        }


        if (finishDiagnosis) {

            if (questionNumber === 3) {
                finishDiagnosis.classList.remove("hidden");
            } else {
                finishDiagnosis.classList.add("hidden");
            }

        }

    }


    // ==========================================
    // VERIFICAR RESPOSTA
    // ==========================================

    function hasAnswer(questionNumber) {

        const answer =
            document.querySelector(
                'input[name="q' +
                questionNumber +
                '"]:checked'
            );

        return answer !== null;

    }


    // ==========================================
    // PRÓXIMA PERGUNTA
    // ==========================================

    if (diagnosisNext) {

        diagnosisNext.addEventListener("click", function () {

            if (!hasAnswer(currentQuestion)) {

                alert(
                    "Escolha uma opção para continuar."
                );

                return;
            }


            if (currentQuestion < 3) {

                currentQuestion++;

                showQuestion(currentQuestion);

            }

        });

    }


    // ==========================================
    // PERGUNTA ANTERIOR
    // ==========================================

    if (diagnosisBack) {

        diagnosisBack.addEventListener("click", function () {

            if (currentQuestion > 1) {

                currentQuestion--;

                showQuestion(currentQuestion);

            }

        });

    }


    // ==========================================
    // FINALIZAR DIAGNÓSTICO
    // ==========================================

    if (finishDiagnosis) {

        finishDiagnosis.addEventListener("click", function () {


            if (!hasAnswer(currentQuestion)) {

                alert(
                    "Escolha uma opção para finalizar o diagnóstico."
                );

                return;
            }


            if (resultCard) {

                resultCard.classList.remove("hidden");

                resultCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }


    // ==========================================
    // REFAZER DIAGNÓSTICO
    // ==========================================

    if (restartDiagnosis) {

        restartDiagnosis.addEventListener("click", function () {


            const radioButtons =
                document.querySelectorAll(
                    'input[type="radio"]'
                );


            radioButtons.forEach(function (radio) {
                radio.checked = false;
            });


            if (resultCard) {
                resultCard.classList.add("hidden");
            }


            currentQuestion = 1;

            showQuestion(currentQuestion);


            const diagnosisSection =
                document.getElementById("diagnostico");


            if (diagnosisSection) {

                diagnosisSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // ==========================================
    // INICIAR SITE
    // ==========================================

    showFormStep(currentFormStep);

    showQuestion(currentQuestion);

    // ==========================================
// EPIC 4 + EPIC 5
// ANÁLISE DE COMPETÊNCIAS
// ==========================================


const careerSelect =
    document.getElementById("careerSelect");

const skillsList =
    document.getElementById("skillsList");

const gapList =
    document.getElementById("gapList");

const skillsCompleted =
    document.getElementById("skillsCompleted");

const skillsMissing =
    document.getElementById("skillsMissing");

const skillsMatch =
    document.getElementById("skillsMatch");


// ==========================================
// DADOS FICTÍCIOS DO MERCADO
// ==========================================

const careerData = {

    backend: [

        {
            nome: "Java",
            demanda: "Alta",
            nivelMercado: 3,
            nivelEstudante: 1
        },

        {
            nome: "SQL",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 2
        },

        {
            nome: "APIs",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 1
        },

        {
            nome: "Docker",
            demanda: "Média",
            nivelMercado: 1,
            nivelEstudante: 0
        },

        {
            nome: "Testes",
            demanda: "Média",
            nivelMercado: 2,
            nivelEstudante: 0
        }

    ],


    frontend: [

        {
            nome: "HTML",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 2
        },

        {
            nome: "CSS",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 2
        },

        {
            nome: "JavaScript",
            demanda: "Alta",
            nivelMercado: 3,
            nivelEstudante: 1
        },

        {
            nome: "React",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 0
        },

        {
            nome: "Git",
            demanda: "Média",
            nivelMercado: 1,
            nivelEstudante: 1
        }

    ],


    data: [

        {
            nome: "SQL",
            demanda: "Alta",
            nivelMercado: 3,
            nivelEstudante: 2
        },

        {
            nome: "Excel",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 2
        },

        {
            nome: "Python",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 1
        },

        {
            nome: "Power BI",
            demanda: "Média",
            nivelMercado: 2,
            nivelEstudante: 0
        },

        {
            nome: "Estatística",
            demanda: "Média",
            nivelMercado: 2,
            nivelEstudante: 1
        }

    ]

};


// ==========================================
// CONVERTER NÍVEL PARA TEXTO
// ==========================================

function getLevelText(level) {

    if (level === 0) {
        return "Não informado";
    }

    if (level === 1) {
        return "Básico";
    }

    if (level === 2) {
        return "Intermediário";
    }

    if (level === 3) {
        return "Avançado";
    }

    return "Não informado";

}


// ==========================================
// ANALISAR COMPETÊNCIAS
// ==========================================

function renderSkills() {

    if (!careerSelect || !skillsList) {
        return;
    }


    const career =
        careerSelect.value;


    const skills =
        careerData[career];


    skillsList.innerHTML = "";


    let completed = 0;

    let missing = 0;

    let totalScore = 0;

    let totalPossible = 0;


    skills.forEach(function (skill) {


        const studentLevel =
            skill.nivelEstudante;

        const marketLevel =
            skill.nivelMercado;


        // Calcula compatibilidade

        const score =
            Math.min(
                studentLevel / marketLevel,
                1
            );


        totalScore += score;

        totalPossible += 1;


        // Status

        let status = "";

        let statusClass = "";


        if (studentLevel >= marketLevel) {

            status = "Competência atendida";

            statusClass = "complete";

            completed++;

        }

        else if (studentLevel > 0) {

            status = "Desenvolvimento necessário";

            statusClass = "partial";

            missing++;

        }

        else {

            status = "Precisa desenvolver";

            statusClass = "missing";

            missing++;

        }


        // Porcentagem da barra

        const percentage =
            Math.round(
                score * 100
            );


        // Cria elemento

        const row =
            document.createElement("div");

        row.className =
            "skill-row";


        row.innerHTML = `

            <div class="skill-top">

                <div class="skill-name">
                    ${skill.nome}
                </div>


                <div class="skill-column">

                    <small>
                        Demanda
                    </small>

                    <strong class="${
                        skill.demanda === "Alta"
                        ? "demand-high"
                        : "demand-medium"
                    }">

                        ${skill.demanda}

                    </strong>

                </div>


                <div class="skill-column">

                    <small>
                        Mercado
                    </small>

                    <strong>
                        ${getLevelText(marketLevel)}
                    </strong>

                </div>


                <div class="status ${statusClass}">
                    ${status}
                </div>

            </div>


            <div class="skill-level">

                <div class="level-track">

                    <div
                        class="level-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>


                <div class="level-text">

                    <span>
                        Seu nível:
                        ${getLevelText(studentLevel)}
                    </span>

                    <span>
                        ${percentage}% compatível
                    </span>

                </div>

            </div>

        `;


        skillsList.appendChild(row);

    });


    // ==========================================
    // ATUALIZA RESUMO
    // ==========================================

    const compatibility =
        Math.round(
            (totalScore / totalPossible) * 100
        );


    if (skillsCompleted) {

        skillsCompleted.textContent =
            completed;

    }


    if (skillsMissing) {

        skillsMissing.textContent =
            missing;

    }


    if (skillsMatch) {

        skillsMatch.textContent =
            compatibility + "%";

    }


    // ==========================================
    // MOSTRAR LACUNAS
    // ==========================================

    if (gapList) {

        gapList.innerHTML = "";


        const gaps =
            skills.filter(function (skill) {

                return (
                    skill.nivelEstudante <
                    skill.nivelMercado
                );

            });


        if (gaps.length === 0) {

            gapList.innerHTML = `

                <div class="gap-item">

                    <span class="gap-dot"></span>

                    <div>

                        <strong>
                            Excelente!
                        </strong>

                        <small>
                            Você atende às principais
                            competências desta carreira.
                        </small>

                    </div>

                </div>

            `;

        }

        else {

            gaps.forEach(function (skill) {

                const difference =
                    skill.nivelMercado -
                    skill.nivelEstudante;


                const item =
                    document.createElement("div");

                item.className =
                    "gap-item";


                item.innerHTML = `

                    <span class="gap-dot"></span>

                    <div>

                        <strong>
                            ${skill.nome}
                        </strong>

                        <small>

                            Seu nível:
                            ${getLevelText(
                                skill.nivelEstudante
                            )}

                            →

                            Mercado:
                            ${getLevelText(
                                skill.nivelMercado
                            )}

                        </small>

                    </div>

                `;


                gapList.appendChild(item);

            });

        }

    }

}


// ==========================================
// ALTERAR CARREIRA
// ==========================================

if (careerSelect) {

    careerSelect.addEventListener(
        "change",
        renderSkills
    );

}


// ==========================================
// BOTÃO DE VALIDAÇÃO
// ==========================================

// ==========================================
// EPIC 6 - VALIDAÇÃO DE HABILIDADES
// ==========================================

const validateSkillBtn =
    document.getElementById(
        "validateSkillBtn"
    );

const challengeCard =
    document.getElementById(
        "challengeCard"
    );

const challengeQuestions =
    document.querySelectorAll(
        ".challenge-question"
    );

const challengeNext =
    document.getElementById(
        "challengeNext"
    );

const challengeBack =
    document.getElementById(
        "challengeBack"
    );

const finishChallenge =
    document.getElementById(
        "finishChallenge"
    );

const challengeCounter =
    document.getElementById(
        "challengeCounter"
    );

const challengeProgress =
    document.getElementById(
        "challengeProgress"
    );

const validationResult =
    document.getElementById(
        "validationResult"
    );

const validationScore =
    document.getElementById(
        "validationScore"
    );

const validatedLevel =
    document.getElementById(
        "validatedLevel"
    );

const validationResultText =
    document.getElementById(
        "validationResultText"
    );

const goRoadmapBtn =
    document.getElementById(
        "goRoadmapBtn"
    );


let currentChallenge = 1;


// Respostas corretas

const correctAnswers = {

    challenge1: "c",

    challenge2: "b",

    challenge3: "c"

};


// ==========================================
// ABRIR DESAFIO
// ==========================================

if (validateSkillBtn) {

    validateSkillBtn.addEventListener(
        "click",
        function () {

            const validationSection =
                document.getElementById(
                    "validacao"
                );

            if (validationSection) {

                validationSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ==========================================
// MOSTRAR QUESTÃO
// ==========================================

function showChallengeQuestion(
    questionNumber
) {

    challengeQuestions.forEach(
        function (question) {

            const number =
                Number(
                    question.getAttribute(
                        "data-challenge"
                    )
                );

            if (
                number === questionNumber
            ) {

                question.classList.add(
                    "active"
                );

            } else {

                question.classList.remove(
                    "active"
                );

            }

        }
    );


    if (challengeCounter) {

        challengeCounter.textContent =
            "Questão " +
            questionNumber +
            " de 3";

    }


    if (challengeProgress) {

        const percentage =
            (questionNumber / 3) * 100;

        challengeProgress.style.width =
            percentage + "%";

    }


    if (challengeBack) {

        if (questionNumber === 1) {

            challengeBack.style.visibility =
                "hidden";

        } else {

            challengeBack.style.visibility =
                "visible";

        }

    }


    if (challengeNext) {

        if (questionNumber === 3) {

            challengeNext.classList.add(
                "hidden"
            );

        } else {

            challengeNext.classList.remove(
                "hidden"
            );

        }

    }


    if (finishChallenge) {

        if (questionNumber === 3) {

            finishChallenge.classList.remove(
                "hidden"
            );

        } else {

            finishChallenge.classList.add(
                "hidden"
            );

        }

    }

}


// ==========================================
// VERIFICAR RESPOSTA
// ==========================================

function getChallengeAnswer(
    questionNumber
) {

    return document.querySelector(
        'input[name="challenge' +
        questionNumber +
        '"]:checked'
    );

}


// ==========================================
// PRÓXIMA QUESTÃO
// ==========================================

if (challengeNext) {

    challengeNext.addEventListener(
        "click",
        function () {

            const answer =
                getChallengeAnswer(
                    currentChallenge
                );


            if (!answer) {

                alert(
                    "Escolha uma alternativa para continuar."
                );

                return;

            }


            if (
                currentChallenge < 3
            ) {

                currentChallenge++;

                showChallengeQuestion(
                    currentChallenge
                );

            }

        }
    );

}


// ==========================================
// QUESTÃO ANTERIOR
// ==========================================

if (challengeBack) {

    challengeBack.addEventListener(
        "click",
        function () {

            if (
                currentChallenge > 1
            ) {

                currentChallenge--;

                showChallengeQuestion(
                    currentChallenge
                );

            }

        }
    );

}


// ==========================================
// FINALIZAR DESAFIO
// ==========================================

if (finishChallenge) {

    finishChallenge.addEventListener(
        "click",
        function () {

            const lastAnswer =
                getChallengeAnswer(
                    currentChallenge
                );


            if (!lastAnswer) {

                alert(
                    "Escolha uma alternativa para finalizar."
                );

                return;

            }


            let score = 0;


            // Calcula resultado

            for (
                let i = 1;
                i <= 3;
                i++
            ) {

                const answer =
                    getChallengeAnswer(i);


                if (
                    answer &&
                    answer.value ===
                    correctAnswers[
                        "challenge" + i
                    ]
                ) {

                    score++;

                }

            }


            const percentage =
                Math.round(
                    (score / 3) * 100
                );


            let level =
                "Não validado";


            if (
                percentage >= 80
            ) {

                level = "Intermediário";

            }

            else if (
                percentage >= 50
            ) {

                level = "Básico";

            }


            // Atualiza resultado

            if (validationScore) {

                validationScore.textContent =
                    percentage + "%";

            }


            if (validatedLevel) {

                validatedLevel.textContent =
                    level;

            }


            if (validationResultText) {

                if (percentage >= 80) {

                    validationResultText.textContent =
                        "Seu desempenho demonstra que você possui uma boa base em JavaScript. Essa competência foi validada pelo CareerMind.";

                }

                else if (percentage >= 50) {

                    validationResultText.textContent =
                        "Você demonstrou conhecimentos básicos em JavaScript. Continue praticando para alcançar o próximo nível.";

                }

                else {

                    validationResultText.textContent =
                        "Seu resultado indica que essa competência ainda precisa ser desenvolvida.";

                }

            }


            if (validationResult) {

                validationResult.classList.remove(
                    "hidden"
                );

                validationResult.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }


            // Guarda resultado

            localStorage.setItem(
                "careerMindJavaScriptLevel",
                level
            );

            localStorage.setItem(
                "careerMindJavaScriptScore",
                percentage
            );

        }
    );

}


// ==========================================
// EPIC 7 - ROADMAP
// ==========================================

const roadmapList =
    document.getElementById(
        "roadmapList"
    );

const roadmapObjective =
    document.getElementById(
        "roadmapObjective"
    );

const roadmapDeadline =
    document.getElementById(
        "roadmapDeadline"
    );

const roadmapHours =
    document.getElementById(
        "roadmapHours"
    );


// ==========================================
// DADOS DOS ROADMAPS
// ==========================================

const roadmaps = {

    frontend: [

        {
            mes: "MÊS 1",
            titulo: "Fundamentos de JavaScript",
            descricao:
                "Construir uma base sólida de lógica e JavaScript.",
            tags: [
                "JavaScript",
                "Lógica",
                "DOM"
            ]
        },

        {
            mes: "MÊS 2",
            titulo: "JavaScript + APIs",
            descricao:
                "Aprender comunicação com APIs e manipulação de dados.",
            tags: [
                "JavaScript",
                "APIs",
                "JSON"
            ]
        },

        {
            mes: "MÊS 3",
            titulo: "React",
            descricao:
                "Conhecer componentes e construção de interfaces.",
            tags: [
                "React",
                "Componentes",
                "Estado"
            ]
        },

        {
            mes: "MÊS 4",
            titulo: "Projeto prático",
            descricao:
                "Desenvolver um projeto completo para o portfólio.",
            tags: [
                "Projeto",
                "Front-end",
                "Portfólio"
            ]
        },

        {
            mes: "MÊS 5",
            titulo: "Git + Portfólio",
            descricao:
                "Organizar projetos e fortalecer o portfólio profissional.",
            tags: [
                "Git",
                "GitHub",
                "Portfólio"
            ]
        },

        {
            mes: "MÊS 6",
            titulo: "Processos seletivos",
            descricao:
                "Preparar currículo, entrevistas e candidaturas.",
            tags: [
                "Currículo",
                "Entrevistas",
                "Vagas"
            ]
        }

    ],


    backend: [

        {
            mes: "MÊS 1",
            titulo: "Java",
            descricao:
                "Construir uma base de programação e orientação a objetos.",
            tags: [
                "Java",
                "Lógica",
                "POO"
            ]
        },

        {
            mes: "MÊS 2",
            titulo: "Java + SQL",
            descricao:
                "Aprender bancos de dados e integração com aplicações.",
            tags: [
                "Java",
                "SQL",
                "Banco de dados"
            ]
        },

        {
            mes: "MÊS 3",
            titulo: "APIs",
            descricao:
                "Desenvolver e consumir APIs para aplicações backend.",
            tags: [
                "APIs",
                "HTTP",
                "JSON"
            ]
        },

        {
            mes: "MÊS 4",
            titulo: "Docker",
            descricao:
                "Conhecer containers e ambientes de desenvolvimento.",
            tags: [
                "Docker",
                "Containers",
                "Backend"
            ]
        },

        {
            mes: "MÊS 5",
            titulo: "Projeto Backend",
            descricao:
                "Construir uma aplicação backend para o portfólio.",
            tags: [
                "Projeto",
                "Java",
                "APIs"
            ]
        },

        {
            mes: "MÊS 6",
            titulo: "Processos seletivos",
            descricao:
                "Preparar currículo, entrevistas técnicas e candidaturas.",
            tags: [
                "Currículo",
                "Entrevistas",
                "Vagas"
            ]
        }

    ],


    data: [

        {
            mes: "MÊS 1",
            titulo: "Excel + fundamentos",
            descricao:
                "Fortalecer organização e análise de dados.",
            tags: [
                "Excel",
                "Dados"
            ]
        },

        {
            mes: "MÊS 2",
            titulo: "SQL",
            descricao:
                "Aprender consultas e manipulação de bancos de dados.",
            tags: [
                "SQL",
                "Banco de dados"
            ]
        },

        {
            mes: "MÊS 3",
            titulo: "Python",
            descricao:
                "Utilizar Python para análise e tratamento de dados.",
            tags: [
                "Python",
                "Pandas"
            ]
        },

        {
            mes: "MÊS 4",
            titulo: "Power BI",
            descricao:
                "Criar visualizações e dashboards.",
            tags: [
                "Power BI",
                "Dashboards"
            ]
        },

        {
            mes: "MÊS 5",
            titulo: "Projeto de dados",
            descricao:
                "Desenvolver um projeto completo para o portfólio.",
            tags: [
                "Projeto",
                "Dados",
                "Portfólio"
            ]
        },

        {
            mes: "MÊS 6",
            titulo: "Processos seletivos",
            descricao:
                "Preparar currículo e buscar oportunidades.",
            tags: [
                "Currículo",
                "Entrevistas",
                "Vagas"
            ]
        }

    ]

};


// ==========================================
// RENDERIZAR ROADMAP
// ==========================================

function renderRoadmap() {

    if (!roadmapList) {
        return;
    }


    // Por enquanto usa Front-end
    // como demonstração

    let career =
        "frontend";


    const profile =
        localStorage.getItem(
            "careerMindProfile"
        );


    // Tenta identificar a carreira
    // pelo objetivo do estudante

    if (profile) {

        try {

            const data =
                JSON.parse(profile);


            const objective =
                (
                    data.objetivo || ""
                ).toLowerCase();


            if (
                objective.includes(
                    "backend"
                ) ||
                objective.includes(
                    "back-end"
                )
            ) {

                career = "backend";

            }

            else if (
                objective.includes(
                    "dados"
                )
            ) {

                career = "data";

            }

        }

        catch (error) {

            console.log(
                "Perfil não encontrado."
            );

        }

    }


    const roadmap =
        roadmaps[career];


    roadmapList.innerHTML = "";


    roadmap.forEach(
        function (step, index) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "roadmap-item";


            const tags =
                step.tags
                    .map(
                        function (tag) {

                            return `
                                <span class="roadmap-tag">
                                    ${tag}
                                </span>
                            `;

                        }
                    )
                    .join("");


            item.innerHTML = `

                <div class="roadmap-number">
                    ${index + 1}
                </div>

                <div class="roadmap-content">

                    <span class="roadmap-month">
                        ${step.mes}
                    </span>

                    <h4>
                        ${step.titulo}
                    </h4>

                    <p>
                        ${step.descricao}
                    </p>

                    <div class="roadmap-tags">
                        ${tags}
                    </div>

                </div>

            `;


            roadmapList.appendChild(
                item
            );

        }
    );


    // Informações do perfil

    if (profile) {

        try {

            const data =
                JSON.parse(profile);


            if (
                roadmapDeadline &&
                data.prazo
            ) {

                roadmapDeadline.textContent =
                    data.prazo;

            }


            if (
                roadmapHours &&
                data.horas
            ) {

                roadmapHours.textContent =
                    data.horas;

            }


            if (
                roadmapObjective &&
                data.objetivo
            ) {

                roadmapObjective.textContent =
                    data.objetivo;

            }

        }

        catch (error) {

            console.log(
                "Não foi possível carregar o perfil."
            );

        }

    }

}


// ==========================================
// BOTÃO "VER MEU ROADMAP"
// ==========================================

if (goRoadmapBtn) {

    goRoadmapBtn.addEventListener(
        "click",
        function () {

            const roadmap =
                document.getElementById(
                    "roadmap"
                );

            if (roadmap) {

                roadmap.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// Renderiza inicialmente

renderRoadmap();


// Mostra a primeira questão

showChallengeQuestion(1);

// ==========================================
// CARREGAR ANÁLISE INICIAL
// ==========================================

renderSkills();

});