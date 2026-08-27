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
            const isOpen = nav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        const links = nav.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
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

    const diagnosisSection =
        document.getElementById("diagnostico");

    const diagnosisTopCareer =
        document.getElementById("diagnosisTopCareer");

    const diagnosisExplanation =
        document.getElementById("diagnosisExplanation");

    const diagnosisRanking =
        document.getElementById("diagnosisRanking");


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
                " de " +
                questions.length;

        }


        if (questionProgress) {

            const percentage =
                (questionNumber / questions.length) * 100;

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

            if (questionNumber === questions.length) {
                diagnosisNext.classList.add("hidden");
            } else {
                diagnosisNext.classList.remove("hidden");
            }

        }


        if (finishDiagnosis) {

            if (questionNumber === questions.length) {
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


    function calculateDiagnosisResult() {

        const areas = [
            { key: "frontend", name: "Desenvolvimento Front-end", score: 0 },
            { key: "backend", name: "Desenvolvimento Backend", score: 0 },
            { key: "data", name: "Dados", score: 0 },
            { key: "product", name: "Produto", score: 0 }
        ];

        const answers = [];

        questions.forEach(function (question) {
            const answer = question.querySelector(
                'input[type="radio"]:checked'
            );

            if (answer) {
                answers.push(answer);

                areas.forEach(function (area) {
                    area.score += Number(
                        answer.dataset[area.key]
                    );
                });
            }
        });

        if (answers.length !== questions.length) {
            return null;
        }

        const maximumScore = questions.length * 3;

        areas.forEach(function (area) {
            area.percentage = Math.round(
                (area.score / maximumScore) * 100
            );
        });

        areas.sort(function (firstArea, secondArea) {
            return secondArea.score - firstArea.score;
        });

        return {
            maximumScore: maximumScore,
            ranking: areas,
            topAreas: areas.filter(function (area) {
                return area.score === areas[0].score;
            })
        };

    }


    function renderDiagnosisResult(result) {

        const topNames = result.topAreas.map(function (area) {
            return area.name;
        });

        const formattedTopNames =
            topNames.length === 1
                ? topNames[0]
                : topNames.slice(0, -1).join(", ") +
                    " e " + topNames[topNames.length - 1];

        if (diagnosisTopCareer) {
            diagnosisTopCareer.textContent =
                formattedTopNames + ".";
        }

        if (diagnosisExplanation) {
            diagnosisExplanation.textContent =
                result.topAreas.length > 1
                    ? "Houve empate na maior pontuação de afinidade entre " +
                        formattedTopNames +
                        ". Explore essas áreas como caminhos orientativos; " +
                        "o percentual não representa probabilidade científica."
                    : "As respostas indicam maior pontuação de afinidade com " +
                        formattedTopNames +
                        ". Este resultado é orientativo, não uma probabilidade científica.";
        }

        if (diagnosisRanking) {
            diagnosisRanking.textContent = "";

            result.ranking.forEach(function (area) {
                const item = document.createElement("div");
                const info = document.createElement("div");
                const name = document.createElement("span");
                const percentage = document.createElement("strong");
                const progress = document.createElement("div");
                const progressBar = document.createElement("span");

                info.className = "career-info";
                progress.className = "progress";
                name.textContent = area.name;
                percentage.textContent =
                    area.percentage + "% de pontuação de afinidade";
                progressBar.style.width = area.percentage + "%";

                info.appendChild(name);
                info.appendChild(percentage);
                progress.appendChild(progressBar);
                item.appendChild(info);
                item.appendChild(progress);
                diagnosisRanking.appendChild(item);
            });
        }

        localStorage.setItem(
            "careerMindDiagnosisResult",
            JSON.stringify({
                type: "resultado orientativo",
                maximumScore: result.maximumScore,
                topAreas: topNames,
                ranking: result.ranking.map(function (area) {
                    return {
                        area: area.name,
                        score: area.score,
                        affinityPercentage: area.percentage
                    };
                }),
                disclaimer:
                    "Não substitui uma avaliação profissional."
            })
        );

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


            if (currentQuestion < questions.length) {

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

            const diagnosisResult =
                calculateDiagnosisResult();

            if (!diagnosisResult) {
                alert(
                    "Responda todas as perguntas antes de finalizar."
                );

                return;
            }

            renderDiagnosisResult(diagnosisResult);
            applyDiagnosisCareerRecommendation(
                diagnosisResult
            );


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
                diagnosisSection
                    ? diagnosisSection.querySelectorAll(
                        'input[type="radio"]'
                    )
                    : [];


            radioButtons.forEach(function (radio) {
                radio.checked = false;
            });


            if (resultCard) {
                resultCard.classList.add("hidden");
            }


            currentQuestion = 1;

            showQuestion(currentQuestion);


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

const careerObjectiveTitle =
    document.getElementById("careerObjectiveTitle");

const careerSelectionContext =
    document.getElementById("careerSelectionContext");

const careerNames = {
    frontend: "Desenvolvedor Front-end",
    backend: "Desenvolvedor Backend",
    data: "Analista de Dados",
    product: "Produto Digital"
};

let careerRecommendation = null;
let careerSelectionSource = "initial";


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

    ],


    product: [

        {
            nome: "Pesquisa com usuários",
            demanda: "Alta",
            nivelMercado: 3,
            nivelEstudante: 1
        },

        {
            nome: "Gestão de produto",
            demanda: "Alta",
            nivelMercado: 3,
            nivelEstudante: 1
        },

        {
            nome: "Prototipação",
            demanda: "Alta",
            nivelMercado: 2,
            nivelEstudante: 1
        },

        {
            nome: "Métricas de produto",
            demanda: "Média",
            nivelMercado: 2,
            nivelEstudante: 0
        },

        {
            nome: "Priorização",
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


function saveCurrentCareerSelection() {

    if (!careerSelect) {
        return;
    }

    localStorage.setItem(
        "careerMindCareerSelection",
        JSON.stringify({
            career:
                careerSelectionSource === "tie"
                    ? null
                    : careerSelect.value,
            source: careerSelectionSource
        })
    );

}


function updateCareerSelectionPresentation() {

    if (!careerSelect) {
        return;
    }

    const isTie =
        careerSelectionSource === "tie" &&
        careerRecommendation;

    const careerName =
        careerNames[careerSelect.value];

    if (careerObjectiveTitle) {
        careerObjectiveTitle.textContent = isTie
            ? "Escolha uma carreira"
            : careerName;
    }

    if (!careerSelectionContext) {
        return;
    }

    if (careerSelectionSource === "diagnosis") {
        careerSelectionContext.textContent =
            "Sugestão baseada no diagnóstico. Você pode escolher outra carreira.";
    }

    else if (
        careerSelectionSource === "tie" &&
        careerRecommendation
    ) {
        const tiedNames =
            careerRecommendation.tiedCareers.map(function (career) {
                return careerNames[career];
            });

        careerSelectionContext.textContent =
            "O diagnóstico indicou empate entre " +
            tiedNames.join(" e ") +
            ". Escolha uma carreira para explorar.";
    }

    else if (careerSelectionSource === "manual") {
        careerSelectionContext.textContent =
            "Carreira escolhida por você. A seleção pode ser alterada a qualquer momento.";
    }

    else {
        careerSelectionContext.textContent =
            "Escolha uma carreira para comparar suas competências.";
    }

}


function applyDiagnosisCareerRecommendation(result) {

    if (!careerSelect) {
        return;
    }

    const tiedCareers = result.topAreas.map(function (area) {
        return area.key;
    });

    careerRecommendation = {
        recommendedCareer:
            tiedCareers.length === 1 ? tiedCareers[0] : null,
        tiedCareers: tiedCareers
    };

    localStorage.setItem(
        "careerMindCareerRecommendation",
        JSON.stringify(careerRecommendation)
    );

    if (careerRecommendation.recommendedCareer) {
        careerSelect.value =
            careerRecommendation.recommendedCareer;
        careerSelectionSource = "diagnosis";
    } else {
        careerSelectionSource = "tie";
        careerSelect.selectedIndex = -1;
    }

    saveCurrentCareerSelection();
    updateCareerSelectionPresentation();

    renderSkills();
    renderRoadmap();

    resetChallenge();

}


function loadCareerSelection() {

    if (!careerSelect) {
        return;
    }

    try {
        const savedRecommendation = JSON.parse(
            localStorage.getItem(
                "careerMindCareerRecommendation"
            )
        );

        if (savedRecommendation) {
            careerRecommendation = savedRecommendation;
        }

        const savedSelection = JSON.parse(
            localStorage.getItem(
                "careerMindCareerSelection"
            )
        );

        if (
            savedSelection &&
            savedSelection.source === "tie" &&
            savedRecommendation &&
            savedRecommendation.tiedCareers &&
            savedRecommendation.tiedCareers.length > 1
        ) {
            careerSelect.selectedIndex = -1;
            careerSelectionSource = "tie";
        }

        else if (
            savedSelection &&
            careerNames[savedSelection.career]
        ) {
            careerSelect.value = savedSelection.career;
            careerSelectionSource = savedSelection.source;
        }
    }

    catch (error) {
        console.warn(
            "Não foi possível carregar a seleção de carreira."
        );
    }

    updateCareerSelectionPresentation();

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

    if (!careerData[career]) {
        skillsList.textContent = "";

        if (skillsCompleted) {
            skillsCompleted.textContent = "—";
        }

        if (skillsMissing) {
            skillsMissing.textContent = "—";
        }

        if (skillsMatch) {
            skillsMatch.textContent = "—";
        }

        if (gapList) {
            gapList.textContent = "";

            const message = document.createElement("div");
            message.className = "gap-item";
            message.textContent =
                "Escolha uma das carreiras empatadas para visualizar competências e lacunas.";
            gapList.appendChild(message);
        }

        return;
    }

    updateCareerSelectionPresentation();


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
        function () {
            careerSelectionSource = "manual";
            saveCurrentCareerSelection();
            updateCareerSelectionPresentation();
            renderSkills();
            renderRoadmap();
            resetChallenge();
        }
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

const challengeTitle =
    document.getElementById(
        "challengeTitle"
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


const questionBanks = {
    frontend: {
        competency: "JavaScript",
        questions: [
            {
                text: "Qual palavra-chave declara uma variável que não pode ser reatribuída em JavaScript?",
                options: [
                    { value: "a", text: "var" },
                    { value: "b", text: "let" },
                    { value: "c", text: "const" },
                    { value: "d", text: "function" }
                ],
                correctAnswer: "c"
            },
            {
                text: "Qual método adiciona um item ao final de um array?",
                options: [
                    { value: "a", text: "pop()" },
                    { value: "b", text: "push()" },
                    { value: "c", text: "shift()" },
                    { value: "d", text: "slice()" }
                ],
                correctAnswer: "b"
            },
            {
                text: "Qual estrutura repete um bloco enquanto uma condição for verdadeira?",
                options: [
                    { value: "a", text: "if" },
                    { value: "b", text: "switch" },
                    { value: "c", text: "while" },
                    { value: "d", text: "try" }
                ],
                correctAnswer: "c"
            }
        ]
    },
    backend: {
        competency: "Java",
        questions: [
            {
                text: "Em Java, qual método é o ponto de entrada de uma aplicação executável?",
                options: [
                    { value: "a", text: "start()" },
                    { value: "b", text: "main()" },
                    { value: "c", text: "run()" },
                    { value: "d", text: "init()" }
                ],
                correctAnswer: "b"
            },
            {
                text: "Qual palavra-chave indica que uma classe herda de outra classe em Java?",
                options: [
                    { value: "a", text: "extends" },
                    { value: "b", text: "implements" },
                    { value: "c", text: "inherits" },
                    { value: "d", text: "instanceof" }
                ],
                correctAnswer: "a"
            },
            {
                text: "Qual coleção Java armazena pares de chave e valor?",
                options: [
                    { value: "a", text: "List" },
                    { value: "b", text: "Set" },
                    { value: "c", text: "Queue" },
                    { value: "d", text: "Map" }
                ],
                correctAnswer: "d"
            }
        ]
    },
    data: {
        competency: "SQL",
        questions: [
            {
                text: "Qual comando SQL consulta dados de uma tabela?",
                options: [
                    { value: "a", text: "SELECT" },
                    { value: "b", text: "UPDATE" },
                    { value: "c", text: "DELETE" },
                    { value: "d", text: "CREATE" }
                ],
                correctAnswer: "a"
            },
            {
                text: "Qual cláusula SQL filtra as linhas de uma consulta?",
                options: [
                    { value: "a", text: "ORDER BY" },
                    { value: "b", text: "GROUP BY" },
                    { value: "c", text: "WHERE" },
                    { value: "d", text: "FROM" }
                ],
                correctAnswer: "c"
            },
            {
                text: "Qual função SQL conta a quantidade de linhas de um resultado?",
                options: [
                    { value: "a", text: "SUM()" },
                    { value: "b", text: "COUNT()" },
                    { value: "c", text: "AVG()" },
                    { value: "d", text: "MAX()" }
                ],
                correctAnswer: "b"
            }
        ]
    },
    product: {
        competency: "Métricas de produto",
        questions: [
            {
                text: "Qual métrica ajuda a acompanhar quantos usuários deixam de usar um produto em um período?",
                options: [
                    { value: "a", text: "Churn" },
                    { value: "b", text: "Receita bruta" },
                    { value: "c", text: "Tamanho do backlog" },
                    { value: "d", text: "Quantidade de releases" }
                ],
                correctAnswer: "a"
            },
            {
                text: "Para avaliar uma nova funcionalidade, qual prática compara duas versões com grupos de usuários?",
                options: [
                    { value: "a", text: "Benchmark" },
                    { value: "b", text: "Teste A/B" },
                    { value: "c", text: "Brainstorming" },
                    { value: "d", text: "Daily meeting" }
                ],
                correctAnswer: "b"
            },
            {
                text: "Qual métrica indica a proporção de usuários que concluiu uma ação desejada?",
                options: [
                    { value: "a", text: "Taxa de conversão" },
                    { value: "b", text: "Custo fixo" },
                    { value: "c", text: "Velocidade da equipe" },
                    { value: "d", text: "Quantidade de histórias" }
                ],
                correctAnswer: "a"
            }
        ]
    }
};


const validationStorageKey =
    "careerMindValidationResults";

const validationLevelValues = {
    "Básico": 1,
    "Intermediário": 2,
    "Avançado": 3
};


function getValidationLevel(percentage) {
    if (percentage >= 80) {
        return "Avançado";
    }

    if (percentage >= 50) {
        return "Intermediário";
    }

    return "Básico";
}


function readValidationResults() {
    try {
        const savedResults = JSON.parse(
            localStorage.getItem(validationStorageKey)
        );

        return savedResults && typeof savedResults === "object"
            ? savedResults
            : {};
    }

    catch (error) {
        console.warn(
            "Não foi possível carregar as validações de competências."
        );
        return {};
    }
}


function saveValidationResult(
    career,
    competency,
    percentage,
    level
) {
    const savedResults = readValidationResults();

    if (!savedResults[career]) {
        savedResults[career] = {};
    }

    savedResults[career][competency] = {
        score: percentage,
        level: level,
        levelValue: validationLevelValues[level]
    };

    localStorage.setItem(
        validationStorageKey,
        JSON.stringify(savedResults)
    );
}


function applyStoredValidationResults() {
    const savedResults = readValidationResults();

    Object.keys(savedResults).forEach(function (career) {
        if (!careerData[career]) {
            return;
        }

        const careerResults = savedResults[career];

        if (!careerResults || typeof careerResults !== "object") {
            return;
        }

        Object.keys(careerResults).forEach(function (competency) {
            const result = careerResults[competency];
            const skill = careerData[career].find(function (item) {
                return item.nome === competency;
            });
            const levelValue = result
                ? validationLevelValues[result.level]
                : null;

            if (skill && levelValue) {
                skill.nivelEstudante = levelValue;
            }
        });
    });
}


function getCurrentQuestionBank() {
    return careerSelect
        ? questionBanks[careerSelect.value]
        : null;
}


function renderChallengeBank() {
    const bank = getCurrentQuestionBank();

    if (!bank) {
        if (challengeTitle) {
            challengeTitle.textContent = "Escolha uma carreira";
        }

        challengeQuestions.forEach(function (container) {
            const heading = container.querySelector("h4");
            const options = container.querySelector(".challenge-options");

            if (heading) {
                heading.textContent =
                    "Selecione uma carreira para carregar o desafio correspondente.";
            }

            if (options) {
                options.textContent = "";
            }
        });

        return;
    }

    if (challengeTitle) {
        challengeTitle.textContent = bank.competency;
    }

    challengeQuestions.forEach(function (container, index) {
        const question = bank.questions[index];
        const heading = container.querySelector("h4");
        const options = container.querySelector(".challenge-options");

        if (!question || !heading || !options) {
            return;
        }

        heading.textContent = question.text;
        options.textContent = "";

        question.options.forEach(function (option) {
            const label = document.createElement("label");
            const input = document.createElement("input");

            input.type = "radio";
            input.name = "challenge" + (index + 1);
            input.value = option.value;

            label.appendChild(input);
            label.appendChild(
                document.createTextNode(" " + option.text)
            );
            options.appendChild(label);
        });
    });
}


function resetChallenge() {
    currentChallenge = 1;
    renderChallengeBank();

    if (validationResult) {
        validationResult.classList.add("hidden");
    }

    if (validationScore) {
        validationScore.textContent = "0%";
    }

    if (validatedLevel) {
        validatedLevel.textContent = "Não validado";
    }

    if (validationResultText) {
        validationResultText.textContent =
            "Conclua o desafio para visualizar o resultado desta competência específica.";
    }

    showChallengeQuestion(currentChallenge);
}


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

    const bank = getCurrentQuestionBank();
    const questionCount = bank
        ? bank.questions.length
        : challengeQuestions.length;

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
            " de " +
            questionCount;

    }


    if (challengeProgress) {

        const percentage =
            (questionNumber / questionCount) * 100;

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

            if (questionNumber === questionCount) {

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

            if (questionNumber === questionCount) {

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

            const bank = getCurrentQuestionBank();

            if (!bank) {
                alert("Escolha uma carreira antes de iniciar o desafio.");
                return;
            }

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
                currentChallenge < bank.questions.length
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

            const bank = getCurrentQuestionBank();

            if (!bank) {
                alert("Escolha uma carreira antes de finalizar o desafio.");
                return;
            }

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
                i <= bank.questions.length;
                i++
            ) {

                const answer =
                    getChallengeAnswer(i);


                if (
                    answer &&
                    answer.value ===
                    bank.questions[i - 1].correctAnswer
                ) {

                    score++;

                }

            }


            const percentage =
                Math.round(
                    (score / bank.questions.length) * 100
                );


            const level =
                getValidationLevel(percentage);


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

                if (level === "Avançado") {

                    validationResultText.textContent =
                        "Seu desempenho demonstra nível avançado em " +
                        bank.competency +
                        ". Este desafio valida somente essa competência específica, não toda a carreira.";

                }

                else if (level === "Intermediário") {

                    validationResultText.textContent =
                        "Você demonstrou nível intermediário em " +
                        bank.competency +
                        ". Continue praticando; este desafio avalia somente essa competência específica.";

                }

                else {

                    validationResultText.textContent =
                        "Você demonstrou nível básico em " +
                        bank.competency +
                        ". Continue desenvolvendo essa competência; o desafio não valida a carreira inteira.";

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


            const currentCareer =
                careerSelect.value;

            saveValidationResult(
                currentCareer,
                bank.competency,
                percentage,
                level
            );

            applyStoredValidationResults();
            renderSkills();
            renderRoadmap();

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

const roadmapPlanningNote =
    document.getElementById(
        "roadmapPlanningNote"
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

    ],


    product: [

        {
            mes: "MÊS 1",
            titulo: "Pesquisa com usuários",
            descricao:
                "Compreender necessidades, problemas e comportamentos dos usuários.",
            tags: [
                "Entrevistas",
                "Pesquisa",
                "Usuários"
            ]
        },

        {
            mes: "MÊS 2",
            titulo: "Descoberta de produto",
            descricao:
                "Transformar problemas identificados em oportunidades de produto.",
            tags: [
                "Discovery",
                "Hipóteses",
                "Jornada"
            ]
        },

        {
            mes: "MÊS 3",
            titulo: "Prototipação",
            descricao:
                "Criar e validar protótipos antes do desenvolvimento.",
            tags: [
                "Protótipos",
                "Testes",
                "Validação"
            ]
        },

        {
            mes: "MÊS 4",
            titulo: "Métricas de produto",
            descricao:
                "Acompanhar indicadores para avaliar resultados e orientar decisões.",
            tags: [
                "Métricas",
                "Indicadores",
                "Dados"
            ]
        },

        {
            mes: "MÊS 5",
            titulo: "Priorização e planejamento",
            descricao:
                "Organizar prioridades e construir um plano de evolução do produto.",
            tags: [
                "Priorização",
                "Roadmap",
                "Planejamento"
            ]
        },

        {
            mes: "MÊS 6",
            titulo: "Projeto de produto",
            descricao:
                "Documentar uma proposta de produto para o portfólio.",
            tags: [
                "Projeto",
                "Produto",
                "Portfólio"
            ]
        }

    ]

};


const roadmapSkillIndexes = {
    frontend: {
        JavaScript: 0,
        React: 2
    },
    backend: {
        Java: 0,
        SQL: 1,
        APIs: 2,
        Docker: 3
    },
    data: {
        Excel: 0,
        SQL: 1,
        Python: 2,
        "Power BI": 3
    },
    product: {
        "Pesquisa com usuários": 0,
        "Gestão de produto": 1,
        Prototipação: 2,
        "Métricas de produto": 3,
        Priorização: 4
    }
};


function getRoadmapPlanning(profile) {

    const deadlineMonths = {
        "3 meses": 3,
        "6 meses": 6,
        "1 ano": 12,
        "2 anos": 24,
        "Mais de 2 anos": 30
    };

    const weeklyHours = {
        "Até 3 horas": 3,
        "4 a 6 horas": 5,
        "7 a 10 horas": 8,
        "11 a 15 horas": 13,
        "Mais de 15 horas": 16
    };

    const hasDeadline =
        profile && deadlineMonths[profile.prazo];
    const hasHours =
        profile && weeklyHours[profile.horas];

    return {
        deadline: hasDeadline ? profile.prazo : "6 meses",
        months: hasDeadline ? deadlineMonths[profile.prazo] : 6,
        hours: hasHours ? profile.horas : "7 a 10 horas",
        weeklyHours: hasHours ? weeklyHours[profile.horas] : 8,
        isDemonstrative: !hasDeadline || !hasHours
    };

}


function buildAdaptiveRoadmap(career, planning) {

    const skills = careerData[career] || [];
    const skillIndexes = roadmapSkillIndexes[career] || {};

    const gaps = skills
        .map(function (skill) {
            return {
                skill: skill,
                difference:
                    skill.nivelMercado - skill.nivelEstudante
            };
        })
        .filter(function (item) {
            return item.difference > 0;
        })
        .sort(function (firstItem, secondItem) {
            if (secondItem.difference !== firstItem.difference) {
                return secondItem.difference - firstItem.difference;
            }

            return Number(
                secondItem.skill.demanda === "Alta"
            ) - Number(
                firstItem.skill.demanda === "Alta"
            );
        });

    const steps = gaps.map(function (item) {
        const skill = item.skill;
        const templateIndex = skillIndexes[skill.nome];
        const template = Number.isInteger(templateIndex)
            ? roadmaps[career][templateIndex]
            : null;

        return {
            titulo: template
                ? template.titulo
                : "Desenvolver " + skill.nome,
            descricao:
                "Prioridade orientativa: evoluir " +
                skill.nome + " de " +
                getLevelText(skill.nivelEstudante) + " para " +
                getLevelText(skill.nivelMercado) + "." +
                (template ? " " + template.descricao : ""),
            tags: [
                skill.nome,
                "Lacuna " + item.difference,
                "Demanda " + skill.demanda.toLowerCase()
            ]
        };
    });

    steps.push({
        titulo: "Projeto prático de " + careerNames[career],
        descricao:
            "Aplicar as competências priorizadas em um projeto demonstrativo.",
        tags: [
            "Projeto prático",
            careerNames[career],
            "Aplicação"
        ]
    });

    steps.push({
        titulo: "Portfólio e processos seletivos",
        descricao:
            "Documentar o projeto, atualizar o portfólio e preparar candidaturas e entrevistas.",
        tags: [
            "Portfólio",
            "Currículo",
            "Entrevistas"
        ]
    });

    const totalWeeks = planning.months * 4;
    const weeksPerStep = Math.max(
        1,
        Math.floor(totalWeeks / steps.length)
    );
    const estimatedHoursPerStep =
        planning.weeklyHours * weeksPerStep;

    return steps.map(function (step, index) {
        return {
            mes:
                "ETAPA " + (index + 1) +
                " • " + weeksPerStep +
                (weeksPerStep === 1 ? " SEMANA" : " SEMANAS"),
            titulo: step.titulo,
            descricao:
                step.descricao +
                " Ritmo sugerido considerando " +
                planning.hours.toLowerCase() +
                " por semana, com cerca de " +
                estimatedHoursPerStep +
                " horas indicativas nesta etapa.",
            tags: step.tags
        };
    });

}


// ==========================================
// RENDERIZAR ROADMAP
// ==========================================

function renderRoadmap() {

    if (!roadmapList) {
        return;
    }


    const career =
        careerSelect
            ? careerSelect.value
            : "frontend";

    if (!roadmaps[career]) {
        roadmapList.textContent = "";

        const message = document.createElement("div");
        message.className = "roadmap-item";
        message.textContent =
            "Escolha uma das carreiras empatadas para gerar seu roadmap.";
        roadmapList.appendChild(message);

        if (roadmapObjective) {
            roadmapObjective.textContent = "Escolha uma carreira";
        }

        if (roadmapPlanningNote) {
            roadmapPlanningNote.textContent =
                "O roadmap será calculado depois da sua escolha.";
        }

        if (roadmapDeadline) {
            roadmapDeadline.textContent = "—";
        }

        if (roadmapHours) {
            roadmapHours.textContent = "—";
        }

        return;
    }


    let profileData = null;

    try {
        profileData = JSON.parse(
            localStorage.getItem(
                "careerMindProfile"
            )
        );
    }

    catch (error) {
        console.warn(
            "Não foi possível carregar o perfil."
        );
    }

    const planning =
        getRoadmapPlanning(profileData);


    const roadmap =
        buildAdaptiveRoadmap(career, planning);


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


    if (roadmapDeadline) {
        roadmapDeadline.textContent = planning.deadline;
    }

    if (roadmapHours) {
        roadmapHours.textContent = planning.hours;
    }

    if (roadmapObjective) {
        roadmapObjective.textContent =
            profileData && profileData.objetivo
                ? profileData.objetivo
                : careerNames[career];
    }

    if (roadmapPlanningNote) {
        const completedSkills = careerData[career].filter(
            function (skill) {
                return skill.nivelEstudante >= skill.nivelMercado;
            }
        ).length;

        roadmapPlanningNote.textContent =
            planning.isDemonstrative
                ? "Planejamento demonstrativo: prazo ou horas não foram informados. " +
                    "Os valores exibidos são orientativos."
                : "Plano orientativo priorizado pelas maiores lacunas. " +
                    completedSkills +
                    " competência(s) atendida(s) ficaram fora do caminho obrigatório.";
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

loadCareerSelection();

applyStoredValidationResults();

renderRoadmap();


// Carrega o desafio da carreira atual

resetChallenge();

// ==========================================
// CARREGAR ANÁLISE INICIAL
// ==========================================

renderSkills();

});
