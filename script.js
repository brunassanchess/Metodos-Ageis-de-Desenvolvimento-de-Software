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

});