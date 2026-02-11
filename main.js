document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ============================================
    // CARTA DE AMOR PARA GABRIELE
    // ============================================
    
    // ===== PERSONALIZE AQUI =====
    const carta = {
        destinataria: "Gabriele",
        remetente: "Seu nome", // COLOCA SEU NOME AQUI
        
        saudacao: "Minha querida Gabriele,",
        
        corpo: `Olá, Princesa, eu não sei bem por onde começar essa carta. Na verdade, faz tempo que venho ensaiando algumas palavras, mas quando penso em você, tudo foge da ordem certa — e talvez o amor seja exatamente sobre isso: um sentimento que recusa organização, que prefere o caminho torto e bonito do coração.

Você chegou na minha vida sem pedir licença, sem avisar. E de repente, tudo passou a ter outro sentido. Seu sorriso virou meu horário preferido do dia, e os momentos em que nossas interminaveis conversas correm soltas. Sua risada, a música que eu quero ouvir em repeat.

Gabriele, eu não sei exatamente o momento em que o "acho que gosto" virou "gosto sim", e o "gostar sim" virou "eu quero poder estar com ela". Só sei que agora é assim: você tá nos meus pensamentos quando acordo, nas minhas distrações durante o dia, e nos meus sonhos quando durmo.

Admiro tanta coisa em você. Seu jeito doce, sua força, a forma como você cuida de quem ama, e principalmente das crianças. Admiro como seus olhos brilham quando você fala dos seus sonhos, e das coisas que voce gosta e planeja — e eu quero estar por perto pra ver cada um deles se realizando.

Você é daquelas pessoas raras, que fazem o mundo parecer menos pesado, mais leve, mais colorido e animado. E eu me sinto sortudo só de poder estar ao seu lado, mesmo que ainda seja nesse "quase" que a gente vive.

Mas se dependesse de mim, esse "quase" virava "pra sempre" hoje mesmo.

Essa carta é só um pedaço pequeno do que eu sinto por você. As palavras são limitadas, mas o sentimento por você é imensuravel. Mas eu quis deixar registrado, escrito à mão (mesmo que digitalmente), o quanto você é especial pra mim.

Gabi, eu gosto de você. Gosto de um jeito que não cabe em carta, em site, em texto. Gosto de um jeito que é só você pra entender.`,
        
        despedida: "Com carinho e admiração,",
        
        ps: "Se você chegou até aqui, saiba que esse site foi feito pensando em cada detalhe seu. E cada detalhe dele tem um pedacinho do que eu sinto."
    };
    
    // ============================================
    // VARIÁVEIS
    // ============================================
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterContainer = document.getElementById('letterContainer');
    const greetingEl = document.getElementById('greeting');
    const letterBodyEl = document.getElementById('letterBody');
    const farewellEl = document.getElementById('farewell');
    const signatureEl = document.getElementById('signature');
    const psEl = document.getElementById('ps');
    const readAgainBtn = document.getElementById('readAgainBtn');
    
    // Data atual formatada
    const hoje = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dataFormatada = hoje.toLocaleDateString('pt-BR', options);
    document.querySelector('.date').textContent = dataFormatada;
    
    // ============================================
    // ABRIR ENVELOPE
    // ============================================
    envelopeWrapper.addEventListener('click', function() {
        // Animação de abrir envelope
        const envelope = document.querySelector('.envelope');
        envelope.style.animation = 'envelopeOpen 0.8s forwards';
        
        // Pequeno atraso para mostrar a carta
        setTimeout(() => {
            envelopeWrapper.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            
            // Iniciar efeito de máquina de escrever
            startTypewriter();
            
            // Criar textura de papel
            createPaperTexture();
            
            // Pequena chuva de confete de corações
            createHeartConfetti();
        }, 600);
    });
    
    // ============================================
    // EFEITO MÁQUINA DE ESCREVER
    // ============================================
    async function startTypewriter() {
        // Limpar conteúdo
        greetingEl.innerHTML = '';
        letterBodyEl.innerHTML = '';
        farewellEl.innerHTML = '';
        signatureEl.innerHTML = '';
        psEl.innerHTML = '';
        
        // Digitar saudação
        await typeText(greetingEl, carta.saudacao, 80);
        await wait(300);
        
        // Digitar corpo da carta (parágrafo por parágrafo)
        const paragrafos = carta.corpo.split('\n\n');
        
        for (let i = 0; i < paragrafos.length; i++) {
            const p = document.createElement('p');
            p.style.marginBottom = '25px';
            letterBodyEl.appendChild(p);
            
            await typeText(p, paragrafos[i].trim(), 50);
            
            if (i < paragrafos.length - 1) {
                await wait(400);
            }
        }
        
        await wait(500);
        
        // Digitar despedida
        await typeText(farewellEl, carta.despedida, 80);
        await wait(300);
        
        // Digitar assinatura
        await typeText(signatureEl, carta.remetente, 100);
        await wait(300);
        
        // Digitar PS
        await typeText(psEl, carta.ps, 70);
        
        // Adicionar cursor piscante no final
        addBlinkingCursor();
    }
    
    // Função de digitar texto
    function typeText(element, text, speed = 50) {
        return new Promise(resolve => {
            let i = 0;
            element.innerHTML = ''; // Limpar
            
            // Adicionar cursor
            const cursor = document.createElement('span');
            cursor.className = 'typewriter-cursor';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed + Math.random() * 30); // Variação pra parecer humano
                } else {
                    // Remove cursor quando terminar
                    if (cursor.parentNode) {
                        cursor.remove();
                    }
                    resolve();
                }
            }
            
            element.appendChild(cursor);
            type();
        });
    }
    
    // Função de espera
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // ============================================
    // ADICIONAR CURSOR PISCANTE NO FINAL
    // ============================================
    function addBlinkingCursor() {
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        cursor.style.marginLeft = '5px';
        psEl.appendChild(cursor);
    }
    
    // ============================================
    // CRIAR TEXTURA DE PAPEL
    // ============================================
    function createPaperTexture() {
        const container = document.querySelector('.letter-container');
        
        // Adicionar algumas manchas aleatórias
        for (let i = 0; i < 5; i++) {
            const stain = document.createElement('div');
            stain.className = 'stain';
            stain.style.position = 'absolute';
            stain.style.width = Math.random() * 150 + 50 + 'px';
            stain.style.height = Math.random() * 80 + 30 + 'px';
            stain.style.left = Math.random() * 80 + '%';
            stain.style.top = Math.random() * 80 + '%';
            stain.style.background = `radial-gradient(ellipse at center, rgba(150, 100, 50, ${Math.random() * 0.05}) 0%, transparent 80%)`;
            stain.style.borderRadius = '50%';
            stain.style.filter = 'blur(' + (Math.random() * 10 + 5) + 'px)';
            stain.style.pointerEvents = 'none';
            stain.style.zIndex = '1';
            container.appendChild(stain);
        }
    }
    
    // ============================================
    // CHUVA DE CORAÇÕES (abertura)
    // ============================================
    function createHeartConfetti() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('span');
                heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕'][Math.floor(Math.random() * 5)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-10%';
                heart.style.fontSize = Math.random() * 30 + 20 + 'px';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.animation = `floatDown ${Math.random() * 3 + 3}s linear forwards`;
                heart.style.zIndex = '1000';
                heart.style.pointerEvents = 'none';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, i * 50);
        }
    }
    
    // ============================================
    // LER NOVAMENTE
    // ============================================
    readAgainBtn.addEventListener('click', function() {
        // Esconder carta
        letterContainer.classList.add('hidden');
        
        // Resetar envelope
        envelopeWrapper.classList.remove('hidden');
        const envelope = document.querySelector('.envelope');
        envelope.style.animation = 'none';
        envelope.offsetHeight; // Forçar reflow
        envelope.style.animation = null;
        
        // Resetar conteúdo da carta
        greetingEl.innerHTML = '';
        letterBodyEl.innerHTML = '';
        farewellEl.innerHTML = '';
        signatureEl.innerHTML = '';
        psEl.innerHTML = '';
        
        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // ============================================
    // ANIMAÇÃO DE FUNDO
    // ============================================
    function createDustParticles() {
        const dustContainer = document.querySelector('.dust-particles');
        
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const particle = document.createElement('span');
                    particle.style.position = 'absolute';
                    particle.style.width = Math.random() * 3 + 1 + 'px';
                    particle.style.height = particle.style.width;
                    particle.style.background = 'rgba(255, 240, 200, ' + (Math.random() * 0.2 + 0.1) + ')';
                    particle.style.borderRadius = '50%';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = '0';
                    particle.style.animation = `floatDown ${Math.random() * 10 + 15}s linear forwards`;
                    particle.style.filter = 'blur(' + (Math.random() * 2) + 'px)';
                    particle.style.pointerEvents = 'none';
                    particle.style.zIndex = '0';
                    
                    dustContainer.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 20000);
                }, i * 200);
            }
        }, 1000);
    }
    
    // Animação floatDown
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatDown {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.6; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Iniciar partículas de poeira
    createDustParticles();
    
    // ============================================
    // EFEITO DE PAPEL VELHO
    // ============================================
    function addAgedEffect() {
        const letter = document.querySelector('.letter-container');
        if (letter) {
            letter.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), inset 0 0 30px rgba(120, 70, 30, 0.2)';
        }
    }
    
    // ============================================
    // PREVENIR ZOOM NO MOBILE
    // ============================================
    document.addEventListener('touchmove', function(e) {
        if (e.target.classList.contains('btn-read-again')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // ============================================
    // MENSAGEM NO CONSOLE (pra você)
    // ============================================
    console.log('%c💌 Carta para Gabriele carregada', 'font-size: 16px; color: #8b4a4a; font-family: cursive;');
    console.log('%cAgora é só ela abrir o envelope... ❤️', 'font-size: 14px; color: #5c4b3a;');
});