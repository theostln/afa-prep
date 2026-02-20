export interface Answer {
  text: string;
  correct: boolean;
}

export interface Question {
  id: string;
  version: string;
  theme: string;
  question: string;
  instruction: string;
  answers: Answer[];
  points: number;
  complexity: "Simple" | "Moyenne";
}

export const questions: Question[] = [
  // =============================================
  // NULLSERIE - Questions originales (27)
  // =============================================
  {
    id: "298",
    version: "0004",
    theme: "IA, prime, principe de base",
    question: "Quel est le principe de base de la prime?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Les recettes de primes doivent être suffisantes pour couvrir les frais de sinistre, les frais administratifs et les bénéfices éventuels de l'assureur.", correct: true },
      { text: "Le revenu des primes doit être suffisant pour couvrir les frais administratifs de la compagnie d'assurance.", correct: false },
      { text: "Le revenu des primes doit être suffisant pour couvrir les frais de recouvrement et de risque de l'assuré.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "20",
    version: "0008",
    theme: "Droit, LSA 45",
    question: "De quoi devez-vous informer les clients dans le cadre de l'art. 45 de la LSA ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Comment les clients peuvent s'informer sur votre formation initiale et votre formation continue.", correct: true },
      { text: "Votre nom et votre adresse", correct: true },
      { text: "Si l'intermédiation en assurance est liée ou non liée.", correct: true },
      { text: "Pour quelles compagnies d'assurance vous avez travaillé jusqu'à présent.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "63",
    version: "0008",
    theme: "Droit, LCA, possibilités de résiliation",
    question: "Parmi les cas cités ci-après, dans quelles situations un contrat d'assurance peut-il être résilié ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Échéance de la police", correct: true },
      { text: "L'assureur modifie la prime pendant la durée du contrat", correct: true },
      { text: "L'assureur fournit des prestations découlant d'un sinistre partiel", correct: true },
      { text: "Refus d'un cas de sinistre", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "13",
    version: "0009",
    theme: "Droit, LSA, but",
    question: "Que règle la LSA ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La surveillance des entreprises d'assurance et des intermédiaires d'assurance", correct: true },
      { text: "La relation contractuelle entre les compagnies d'assurance et les assurés", correct: false },
      { text: "Les droits des salariés dans le secteur de l'assurance", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "308",
    version: "0003",
    theme: "IA, gestion des risques, définition",
    question: "La gestion des risques consiste principalement à...",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "... gérer systématiquement les risques.", correct: true },
      { text: "... conclure le contrat le plus rapidement possible.", correct: false },
      { text: "... combler les lacunes d'assurance.", correct: false },
      { text: "... éviter tous les risques.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277a",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance inventaire du ménage ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: true },
      { text: "Assurance de personnes", correct: false },
      { text: "Assurance de patrimoine", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277b",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance incendie ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: true },
      { text: "Assurance de personnes", correct: false },
      { text: "Assurance de patrimoine", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277c",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance responsabilité civile ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: false },
      { text: "Assurance de personnes", correct: false },
      { text: "Assurance de patrimoine", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277d",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance perte d'exploitation ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: false },
      { text: "Assurance de personnes", correct: false },
      { text: "Assurance de patrimoine", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277e",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance-maladie ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: false },
      { text: "Assurance de personnes", correct: true },
      { text: "Assurance de patrimoine", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "277f",
    version: "0004",
    theme: "IA, classification, personne-chose-patrimoine",
    question: "Comment classez-vous l'assurance invalidité ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Assurance de choses", correct: false },
      { text: "Assurance de personnes", correct: true },
      { text: "Assurance de patrimoine", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329a",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "La chaîne de valeur d'un assureur peut être divisée en processus de management, commerciaux et de soutien. À quel processus appartient la « Gestion des produits » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: true },
      { text: "Processus de management", correct: false },
      { text: "Processus de soutien", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329b",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "À quel processus de la chaîne de valeur d'un assureur appartient l'« Administration des contrats et service » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: true },
      { text: "Processus de management", correct: false },
      { text: "Processus de soutien", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329c",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "À quel processus de la chaîne de valeur d'un assureur appartient l'« Informatique » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: false },
      { text: "Processus de management", correct: false },
      { text: "Processus de soutien", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329d",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "À quel processus de la chaîne de valeur d'un assureur appartient la « Souscription » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: true },
      { text: "Processus de management", correct: false },
      { text: "Processus de soutien", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329e",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "À quel processus de la chaîne de valeur d'un assureur appartient la « Planification et contrôle » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: false },
      { text: "Processus de management", correct: true },
      { text: "Processus de soutien", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "329f",
    version: "0004",
    theme: "IA, processus de création de valeur, distinction",
    question: "À quel processus de la chaîne de valeur d'un assureur appartient la « Gestion du personnel » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Processus commercial", correct: false },
      { text: "Processus de management", correct: false },
      { text: "Processus de soutien", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "315a",
    version: "0004",
    theme: "IA, gestion des risques, mesures de sécurité",
    question: "Gestion des risques : La direction considère que l'expansion à l'étranger est trop risquée et renonce donc à construire une usine de production en Pologne. De quelle mesure s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Éviter les risques", correct: true },
      { text: "Transférer les risques", correct: false },
      { text: "Réduire les risques", correct: false },
      { text: "Accepter les risques", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "315b",
    version: "0004",
    theme: "IA, gestion des risques, mesures de sécurité",
    question: "Gestion des risques : Le propriétaire assure sa maison contre les incendies. De quelle mesure s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Éviter les risques", correct: false },
      { text: "Transférer les risques", correct: true },
      { text: "Réduire les risques", correct: false },
      { text: "Accepter les risques", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "315c",
    version: "0004",
    theme: "IA, gestion des risques, mesures de sécurité",
    question: "Gestion des risques : Un bijoutier décide de réduire la marchandise exposée en vitrine (max CHF 20'000 au lieu de CHF 100'000). De quelle mesure s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Éviter les risques", correct: false },
      { text: "Transférer les risques", correct: false },
      { text: "Réduire les risques", correct: true },
      { text: "Accepter les risques", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "292a",
    version: "0004",
    theme: "IA, prime, types de primes",
    question: "Quel type de prime les actuaires déterminent-ils sur la base de statistiques et de calculs de probabilité ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: true },
      { text: "Prime contractuelle", correct: false },
      { text: "Prime brute", correct: false },
      { text: "Prime nette", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "292b",
    version: "0004",
    theme: "IA, prime, types de primes",
    question: "Si vous ajoutez les « particularités du client » à la prime brute, quel type de prime obtenez-vous ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: false },
      { text: "Prime contractuelle", correct: true },
      { text: "Prime brute", correct: false },
      { text: "Prime nette", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "281",
    version: "0005",
    theme: "IA, classification, dommage-somme",
    question: "Les assurances peuvent être classées selon différents critères. Quel critère permet de distinguer les « assurances dommages » et les « assurances de sommes »?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prestation d'assurance", correct: true },
      { text: "Objet de l'assurance", correct: false },
      { text: "Obligation d'assurance", correct: false },
      { text: "Organisme d'assurance", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "288a",
    version: "0004",
    theme: "IA, systèmes de financement, distinction",
    question: "À quel système de financement correspond cette caractéristique ? « Force : convient aux risques relativement constants et faciles à estimer »",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Système de la couverture des besoins", correct: true },
      { text: "Système de capitalisation", correct: false },
      { text: "Système de répartition", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "288b",
    version: "0004",
    theme: "IA, systèmes de financement, distinction",
    question: "À quel système de financement correspond cette caractéristique ? « Force : le droit au capital épargné est garanti »",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Système de la couverture des besoins", correct: false },
      { text: "Système de capitalisation", correct: true },
      { text: "Système de répartition", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "288c",
    version: "0004",
    theme: "IA, systèmes de financement, distinction",
    question: "À quel système de financement correspond cette caractéristique ? « Faiblesse : sensible à la hausse du taux de la rente de vieillesse »",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Système de la couverture des besoins", correct: false },
      { text: "Système de capitalisation", correct: false },
      { text: "Système de répartition", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "324",
    version: "0004",
    theme: "IA, couverture d'assurance, cas de sinistre",
    question: "L'assurance couvre le besoin pécuniaire de l'assuré. Toutefois, la personne assurée ne doit pas retirer d'avantages financiers en cas de sinistre. Quel principe est décrit ici ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Enrichissement illégitime", correct: true },
      { text: "Obligation de collaborer", correct: false },
      { text: "Obligation de sauvetage", correct: false },
      { text: "Obligation de réduire le dommage", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "10",
    version: "0008",
    theme: "Droit, litige, organe de conciliation",
    question: "En cas de litige entre un preneur d'assurance et son assureur, le client peut s'adresser à un organe de conciliation afin qu'une solution puisse être trouvée. Comment s'appelle cet organe ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "L'ombudsman de l'assurance privée et de la SUVA", correct: true },
      { text: "Organe de conciliation Autorité fédérale de surveillance des marchés financiers (FINMA)", correct: false },
      { text: "Tribunal fédéral des assurances", correct: false },
      { text: "Fédération romande des consommateurs (FRC)", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "70",
    version: "0006",
    theme: "Droit, LCA, prime",
    question: "Si une prime reste impayée, l'obligation de prestation de la compagnie d'assurance est interrompue par une sommation légale. Dans quel délai le paiement doit-il être effectué pour éviter la suspension de couverture ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "14 jours à partir de l'envoi de la sommation", correct: true },
      { text: "14 jours après la réception de la sommation", correct: false },
      { text: "30 jours à partir de l'envoi de la sommation", correct: false },
      { text: "30 jours après la réception de la sommation", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "15",
    version: "0009",
    theme: "Droit, LSA, premier contact",
    question: "Quelle information dois-tu obligatoirement fournir à un client potentiel lors du premier contact ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Indiquer toutes les relations contractuelles existantes avec des compagnies d'assurance", correct: true },
      { text: "Donner des détails sur votre convention de courtier", correct: false },
      { text: "Indiquer la forme juridique de votre compagnie d'assurance", correct: false },
      { text: "Mentionner le for juridique en cas de litige", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "42a",
    version: "0007",
    theme: "Droit, LCA, réticence",
    question: "La société Optique SA a déjà subi deux effractions et n'a pas mentionné ce fait à son nouvel assureur. La compagnie peut-elle résilier la police dans les deux semaines après avoir eu connaissance de la réticence ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "42b",
    version: "0007",
    theme: "Droit, LCA, réticence",
    question: "La société Optique SA a déjà subi deux effractions et n'a pas mentionné ce fait à son nouvel assureur. La compagnie peut-elle résilier la police dans les quatre semaines après avoir eu connaissance de la réticence ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "42c",
    version: "0007",
    theme: "Droit, LCA, réticence",
    question: "En cas de réticence de la société Optique SA, l'assureur conserve-t-il la prime déjà payée pour la période d'assurance en cours ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "42d",
    version: "0007",
    theme: "Droit, LCA, réticence",
    question: "En cas de réticence, le nouvel assureur peut-il demander le remboursement de l'indemnité déjà versée pour le dégât d'eau ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "33",
    version: "0005",
    theme: "Droit, LCA, champ d'application",
    question: "A quelles assurances, dans la liste ci-après, s'appliquent les dispositions de la LCA ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Assurance responsabilité civile d'entreprise", correct: true },
      { text: "Assurance véhicules à moteur", correct: true },
      { text: "Assurance de protection juridique", correct: true },
      { text: "Assurance vie", correct: true },
      { text: "Prévoyance professionnelle", correct: false },
      { text: "Assurance-maladie obligatoire", correct: false },
      { text: "Assurance vieillesse et survivants", correct: false },
      { text: "Assurance militaire", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "35a",
    version: "0007",
    theme: "Droit, LCA, prestations",
    question: "En cas de sinistre causé intentionnellement, quelle est l'étendue des prestations de l'assureur ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prestation complète", correct: false },
      { text: "Prestation réduite", correct: false },
      { text: "Pas de prestation", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "35b",
    version: "0007",
    theme: "Droit, LCA, prestations",
    question: "En cas de sinistre causé par une faute grave de la personne assurée, quelle est l'étendue des prestations de l'assureur ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prestation complète", correct: false },
      { text: "Prestation réduite", correct: true },
      { text: "Pas de prestation", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "35c",
    version: "0007",
    theme: "Droit, LCA, prestations",
    question: "En cas de sinistre causé par une faute légère, quelle est l'étendue des prestations de l'assureur ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prestation complète", correct: true },
      { text: "Prestation réduite", correct: false },
      { text: "Pas de prestation", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "35d",
    version: "0007",
    theme: "Droit, LCA, prestations",
    question: "En cas de sinistre causé par une faute grave du preneur d'assurance, quelle est l'étendue des prestations de l'assureur ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prestation complète", correct: false },
      { text: "Prestation réduite", correct: true },
      { text: "Pas de prestation", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "91",
    version: "0005",
    theme: "Droit, LCA, contrat d'assurance",
    question: "Dans quels cas le contrat d'assurance prend-il fin ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Une voiture de tourisme est entièrement détruite. L'assureur verse l'indemnité convenue pour ce cas.", correct: true },
      { text: "Le preneur d'assurance décède. L'assurance vie verse le capital-décès assuré.", correct: true },
      { text: "L'assureur résilie le contrat pour cause de réticence.", correct: true },
      { text: "Un incendie dans une pièce détruit certains éléments de l'inventaire du ménage de l'appartement de 4 pièces et demi.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "210",
    version: "0003",
    theme: "Droit, LSA, obligation d'information",
    question: "Un Conseiller d'assurance conclut une assurance auprès d'un nouveau client. Il oublie d'informer le client au sujet de l'article 45 LSA. Qu'est-ce qui s'applique à la validité du contrat ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "L'assurance est conclue lorsque la compagnie d'assurance accepte le contrat.", correct: true },
      { text: "Le contrat n'est pas conclu en raison de la violation de l'obligation d'informer.", correct: false },
      { text: "Si les CGA ont été remises, le devoir d'information selon l'art. 45 LSA est rempli.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "95",
    version: "0005",
    theme: "Droit, LCA, droit de révocation",
    question: "Existe-t-il une exigence de forme pour la déclaration de révocation ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Oui, elle doit être faite sous forme de texte.", correct: true },
      { text: "Oui, elle doit comporter une signature manuscrite.", correct: false },
      { text: "Non, il n'existe pas d'exigence de forme.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "77",
    version: "0005",
    theme: "Droit, LCA, clause contractuelle d'adaptation des primes",
    question: "L'assureur informe Pierre Bailly que la prime de son assurance automobile sera augmentée au début de l'année prochaine (clause contractuelle d'adaptation des primes). Que se passe-t-il avec le contrat d'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le contrat prend fin automatiquement.", correct: false },
      { text: "Le preneur d'assurance peut résilier le contrat.", correct: true },
      { text: "L'assureur peut résilier le contrat.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "92",
    version: "0008",
    theme: "Droit, LCA, contractants",
    question: "Selon la loi sur le contrat d'assurance (LCA) qui est contractant ?",
    instruction: "Cochez les bonnes réponses.",
    answers: [
      { text: "L'entreprise d'assurance", correct: true },
      { text: "Le preneur d'assurance", correct: true },
      { text: "L'intermédiaire", correct: false },
      { text: "La personne assurée", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "3",
    version: "0007",
    theme: "Droit, protection des données, principes de base",
    question: "Quels sont les principes de base de la protection des données ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Exactitude", correct: true },
      { text: "Obligation de respecter le but indiqué", correct: true },
      { text: "Sécurité des données", correct: true },
      { text: "Droit d'accès", correct: true },
      { text: "Proportionnalité", correct: true },
      { text: "Solidarité", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "11",
    version: "0007",
    theme: "Droit, LSA, intermédiaires d'assurance",
    question: "Quelles affirmations s'appliquent aux intermédiaires d'assurance ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Les intermédiaires d'assurance non liés doivent fournir des garanties financières.", correct: true },
      { text: "Les intermédiaires d'assurance non liés ne doivent pas avoir de casier judiciaire ni d'antécédents en matière de poursuites.", correct: true },
      { text: "Les intermédiaires d'assurance non liés doivent disposer d'une assurance responsabilité civile professionnelle.", correct: true },
      { text: "Tous les intermédiaires d'assurance doivent être inscrits dans un registre.", correct: true },
      { text: "Tous les intermédiaires d'assurance doivent passer un examen professionnel fédéral.", correct: false },
      { text: "Les intermédiaires d'assurance liés doivent avoir une assurance responsabilité civile privée.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "37",
    version: "0006",
    theme: "Droit, LCA, conclusion",
    question: "Il y a plusieurs éléments à considérer en relation avec la proposition et son acceptation par l'entreprise d'assurance.",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "L'entreprise d'assurance doit informer explicitement le proposant de l'acceptation de sa proposition. L'envoi de la police d'assurance ne suffit pas.", correct: false },
      { text: "Lorsqu'un proposant signe une proposition, il doit être en possession des conditions générales d'assurance.", correct: true },
      { text: "L'entreprise d'assurance est libre d'accepter ou de refuser une proposition signée.", correct: true },
      { text: "Le proposant bénéficie de la couverture d'assurance demandée, même si la compagnie d'assurance n'a pas encore accepté la proposition.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "21",
    version: "0012",
    theme: "Droit, LSA 45, contenu",
    question: "Quelles informations dois-tu donner à la clientèle dans le cadre de l'art. 45 LSA ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "À propos du traitement des données personnelles", correct: true },
      { text: "À propos de la conservation des données personnelles", correct: true },
      { text: "De la personne qui peut être tenue responsable de négligence ou d'erreurs", correct: true },
      { text: "À propos des horaires d'ouverture de l'agence / filiale", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },

  // =============================================
  // INDUSTRIE DE L'ASSURANCE - Document 701/702 (52 questions)
  // =============================================
  {
    id: "ind_3",
    version: "0001",
    theme: "IA, gestion des risques, types de risque",
    question: "Lorsqu'on évoque l'âge d'un client lors d'une évaluation des risques, on parle de…",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Risque subjectif", correct: false },
      { text: "Risque objectif", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_4",
    version: "0001",
    theme: "IA, gestion des risques, types de risque",
    question: "Le risque incendie d'un immeuble d'habitations ne change pas au cours de la période du contrat. Quel terme utilise-t-on alors ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Grand risque.", correct: false },
      { text: "Risque subjectif.", correct: false },
      { text: "Risque constant.", correct: true },
      { text: "Risque assuré.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_5",
    version: "0001",
    theme: "IA, gestion des risques, réduction des risques",
    question: "Dans les énoncés suivants, lesquels se rapportent à la réduction des risques de l'assureur ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "On comprend par limitation primaire du risque le rejet du risque à un réassureur.", correct: false },
      { text: "Par la sélection de clients, l'assureur est à même de limiter les risques.", correct: true },
      { text: "La co-assurance fait partie de la réduction de risque primaire.", correct: false },
      { text: "A l'exclusion de certains risques, l'assureur peut limiter ses risques.", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_6",
    version: "0001",
    theme: "IA, systèmes de financement, capitalisation",
    question: "En parlant de système de capitalisation, quelles réponses sont correctes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Particulièrement adapté pour un contrat à long terme.", correct: true },
      { text: "S'ajuste automatiquement à l'inflation.", correct: false },
      { text: "Financement sur le principe de l'équivalence.", correct: true },
      { text: "La base en est le principe de solidarité.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_7",
    version: "0001",
    theme: "IA, couverture d'assurance, interdiction d'enrichissement",
    question: "L'assurance couvre le besoin de remboursement de l'assuré. Toutefois, on doit éviter que l'assuré se retrouve enrichi suite à un sinistre. Comment s'appelle ce précepte ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Fraude à l'assurance", correct: false },
      { text: "Besoin en fortune", correct: false },
      { text: "Interdiction d'enrichissement", correct: true },
      { text: "Lésion", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_8",
    version: "0001",
    theme: "IA, gestion des risques, cumul",
    question: "Lorsqu'un événement qui conduit à des accumulations excessives survient dans le portefeuille d'un assureur, on parle de…",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Loi des grands nombres", correct: false },
      { text: "Risque catastrophe", correct: false },
      { text: "Cumul de risque", correct: true },
      { text: "Risque d'erreur", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_9",
    version: "0001",
    theme: "IA, caractéristiques de l'assurance, idée de base",
    question: "Quelle est l'idée de base de l'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La mutualité", correct: true },
      { text: "La conformité à un plan", correct: false },
      { text: "L'exploitation économique", correct: false },
      { text: "La communauté des assurés", correct: false },
      { text: "Une équipe pour la sécurité", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_10",
    version: "0001",
    theme: "IA, classification, assurance de somme",
    question: "Lors de la réalisation d'un événement assuré, la somme convenue est versée indépendamment du réel besoin. Il s'agit de…",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Capital garanti", correct: false },
      { text: "Assurance de dommage", correct: false },
      { text: "Assurance collective", correct: false },
      { text: "Assurance de somme", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_11",
    version: "0001",
    theme: "IA, gestion des risques, risque objectif",
    question: "Laquelle de ces descriptions correspond à un risque objectif ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Les habitudes alimentaires du preneur d'assurance", correct: false },
      { text: "Les valeurs et l'attitude d'une personne.", correct: false },
      { text: "Les activités physiques d'une personne assurée.", correct: false },
      { text: "L'état de santé actuel du demandeur d'assurance.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_12",
    version: "0001",
    theme: "IA, réassurance, distinction",
    question: "Dans la réassurance, une distinction est faite entre une assurance de somme et une assurance de dommage. Quelles affirmations sont correctes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Dans l'assurance de somme, le réassureur participe à un certain pourcentage du portefeuille d'assurance et est impliqué pour les passifs, la prime et les règlements de sinistres.", correct: true },
      { text: "Dans l'assurance de dommage, l'assureur peut transmettre au réassureur les dommages qui dépassent la franchise convenue.", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_13",
    version: "0001",
    theme: "IA, classification, assurance de chose",
    question: "Lesquelles de ces types d'assurances sont des assurances de chose ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "La prévoyance liée", correct: false },
      { text: "L'assurance responsabilité civile privée", correct: false },
      { text: "L'assurance de bagages", correct: true },
      { text: "L'assurance indemnités journalières en cas de maladie", correct: false },
      { text: "L'assurance responsabilité civile pour les véhicules à moteur", correct: false },
      { text: "L'assurance responsabilité civile d'entreprise", correct: false },
      { text: "L'assurance construction", correct: true },
      { text: "L'assurance responsabilité civile immeuble", correct: false },
      { text: "L'assurance dégâts d'eau bâtiment", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_14",
    version: "0001",
    theme: "IA, gestion des risques, définition",
    question: "La gestion des risques signifie…",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Un concept pour faire face aux risques.", correct: true },
      { text: "Reporter les risques sur les fournisseurs et/ou les clients.", correct: false },
      { text: "Un concept pour réduire les risques.", correct: false },
      { text: "Reporter le risque existant sur une compagnie d'assurance.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_17",
    version: "0001",
    theme: "IA, entreprise d'assurance, formes juridiques",
    question: "Quelles sont les formes juridiques acceptées pour une société d'assurance en Suisse ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Sàrl", correct: false },
      { text: "Société coopérative", correct: true },
      { text: "Société en nom collectif", correct: false },
      { text: "Société anonyme", correct: true },
      { text: "Société en commandite", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_18",
    version: "0001",
    theme: "IA, classification, assurance de somme",
    question: "Laquelle des affirmations ci-dessous s'applique-t-elle à l'assurance de somme ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "En cas de sinistre, seuls les dommages effectifs seront payés, jusqu'à concurrence de la somme assurée.", correct: false },
      { text: "En cas de sinistre, la somme assurée sera versée dans tous les cas, et ce indépendamment du montant des dommages.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_19",
    version: "0001",
    theme: "IA, systèmes de financement, couverture des besoins",
    question: "Laquelle des affirmations suivantes correspond à la couverture des besoins ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Les prestations annuelles sont couvertes par les primes encaissées de la même année.", correct: false },
      { text: "Les dépenses, liées à des prestations futures, sont financées par avance par une mise à disposition des capitaux nécessaires.", correct: false },
      { text: "On fixe pour une période convenue la prime correspondante. Réserves : financement pour les prestations déjà connues dans le futur.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_20",
    version: "0001",
    theme: "IA, gestion des risques, limitation primaire",
    question: "Quelles mesures appartiennent à la limitation primaire des risques d'un assureur ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Contrat de réassurance proportionnel", correct: false },
      { text: "Politique d'acceptation (underwriting Policy)", correct: true },
      { text: "Contrat de réassurance non proportionnel", correct: false },
      { text: "Pool d'assureurs", correct: false },
      { text: "Participation des clients : franchises", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_21",
    version: "0001",
    theme: "IA, fiscalité, TVA",
    question: "La taxe sur la valeur ajoutée est un impôt direct, encaissé par l'État. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_22",
    version: "0001",
    theme: "IA, entreprise d'assurance, prestations de base",
    question: "Quelle affirmation concernant les prestations de base et complémentaires d'un assureur est correcte ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "L'organisation de manifestations ainsi que l'activité de sponsoring font partie des prestations de base de toute bonne compagnie d'assurances.", correct: false },
      { text: "Un conseil global (ex. analyse de prévoyance) pour une personne privée ou un conseil sur la gestion des risques compte pour l'assureur comme prestation de base.", correct: false },
      { text: "La prestation de base, dans le cadre d'une assurance responsabilité civile privée, est de défendre l'assuré contre les prétentions injustifiées et d'apporter une prestation pour la réparation du dommage.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_25",
    version: "0001",
    theme: "IA, prime, prime nette",
    question: "Quelle affirmation est correcte concernant la prime d'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le calcul de la prime, dans le marché actuel, ne joue qu'un rôle mineur. Seule la prime du marché compte.", correct: false },
      { text: "La prime nette d'une couverture d'assurance correspond aux coûts pour une période donnée. C'est le point de départ du calcul de la prime brute. Un supplément pour risque est inclus.", correct: true },
      { text: "Un ratio combiné de 109% peut sans autre être compensé facilement par le résultat financier de l'assureur.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_27",
    version: "0001",
    theme: "Droit, LCA, dispositions impératives",
    question: "Quelle affirmation est correcte concernant les dispositions impératives de la LCA ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Les dispositions impératives ne peuvent pas être modifiées.", correct: true },
      { text: "Les dispositions impératives ne peuvent être modifiées qu'en faveur du preneur d'assurance.", correct: false },
      { text: "La moitié des dispositions peut être modifiée en faveur de la compagnie d'assurance.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_28",
    version: "0001",
    theme: "IA, systèmes de financement, répartition",
    question: "Selon le système de répartition, les primes actuelles sont utilisées pour fournir les prestations de retraite actuelles. L'AVS est financée selon ce modèle. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_29",
    version: "0001",
    theme: "IA, systèmes de financement, caisses de pension",
    question: "Les caisses de pensions financent leurs obligations selon la méthode de la couverture des besoins. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_30",
    version: "0001",
    theme: "IA, prime, prime en espèce",
    question: "Cette prime est indiquée dans la facture que le client reçoit de l'assureur. De quelle prime s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: false },
      { text: "Prime nette", correct: false },
      { text: "Prime brute", correct: false },
      { text: "Prime contractuelle", correct: false },
      { text: "Prime en espèce ou au comptant", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_31",
    version: "0001",
    theme: "IA, prime, prime nette",
    question: "Cette prime comprend le supplément pour risque. De quelle prime s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: false },
      { text: "Prime nette", correct: true },
      { text: "Prime brute", correct: false },
      { text: "Prime contractuelle", correct: false },
      { text: "Prime en espèce", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_32",
    version: "0001",
    theme: "IA, prime, prime brute",
    question: "Cette prime est le point de départ pour le calcul de la prime contractuelle. De quelle prime s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: false },
      { text: "Prime nette", correct: false },
      { text: "Prime brute", correct: true },
      { text: "Prime contractuelle", correct: false },
      { text: "Prime en espèce", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_33",
    version: "0001",
    theme: "IA, prime, prime de risque",
    question: "Cette prime est le résultat des calculs des actuaires. De quelle prime s'agit-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Prime de risque", correct: true },
      { text: "Prime nette", correct: false },
      { text: "Prime brute", correct: false },
      { text: "Prime contractuelle", correct: false },
      { text: "Prime en espèce", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_34",
    version: "0001",
    theme: "IA, activité d'intermédiaire, fonctions",
    question: "Quelles sont les principales fonctions confiées à un intermédiaire d'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Création d'offres, fonction de vente", correct: false },
      { text: "Administration des ventes, activités de contrôle", correct: false },
      { text: "Collecte de données du marché, fonction de conseil", correct: false },
      { text: "Fonction de vente et de conseil", correct: true },
      { text: "Représentation, administration des ventes", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_35",
    version: "0001",
    theme: "IA, activité d'intermédiaire, évaluation des besoins",
    question: "Dans le cadre d'une évaluation des besoins, l'intermédiaire d'assurance clarifie les dangers auxquels le client est exposé. Il examine ensuite la couverture du client. Enfin, la nécessité d'une assurance est calculée sur la base des objectifs et des désirs du client. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_36",
    version: "0001",
    theme: "IA, activité d'intermédiaire, commissions",
    question: "Dans une commission de conclusion, le courtier recevra, pour chaque intermédiation de contrat d'assurance, un pourcentage ou un taux en pour mille de la somme assurée ou de la prime d'assurance. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_37",
    version: "0001",
    theme: "IA, activité d'intermédiaire, super-commission",
    question: "Avec une super-commission, l'assureur récompense l'agent général pour les loyers, les salaires des employés du service interne, etc. Ces super-commissions sont généralement payées annuellement. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_38",
    version: "0001",
    theme: "IA, fiscalité, TVA",
    question: "Quelles parts du chiffre d'affaires sont soumises à la taxe sur la valeur ajoutée ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Prestation de service rémunérée en Suisse", correct: true },
      { text: "Prestation de service rémunérée à l'étranger", correct: false },
      { text: "L'importation de marchandises en provenance de l'étranger (import)", correct: true },
      { text: "L'exportation de marchandises à l'étranger (export)", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_39",
    version: "0001",
    theme: "IA, fiscalité, TVA",
    question: "Pour les ventes exonérées de la taxe sur la valeur ajoutée, une déduction de l'impôt préalable peut être faite. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: false },
      { text: "Faux", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_43",
    version: "0001",
    theme: "IA, couverture d'assurance, assurance ménage",
    question: "L'élément essentiel dans l'assurance ménage est d'offrir au client une couverture d'assurance pour les risques sur toutes les choses qui appartiennent au ménage. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_44",
    version: "0001",
    theme: "IA, entreprise d'assurance, qualité de service",
    question: "Pour que les clients soient satisfaits, différents critères ont une grande importance. Ceux-ci comprennent entre autres que les conseillers à la clientèle soient dignes de confiance, compétents et qu'ils aient un aspect soigné. Vrai ou faux ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_45",
    version: "0001",
    theme: "IA, gestion des risques, évaluation",
    question: "Max entreprend de faire avec des amis un trek à vélo en montagnes. Évaluez l'ampleur du risque suivant : lorsque Max roule, la chaîne de son vélo casse et doit être remplacée.",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Pas grave", correct: true },
      { text: "Grave / très grave", correct: false },
      { text: "Mise en danger de la vie", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_46",
    version: "0001",
    theme: "IA, gestion des risques, évaluation",
    question: "Max entreprend de faire avec des amis un trek à vélo en montagnes avec pistes de descente. Évaluez l'ampleur du risque suivant : Max perd le contrôle de son vélo sur la piste de descente et entre en collision avec un arbre.",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Pas grave", correct: false },
      { text: "Grave / très grave", correct: false },
      { text: "Mise en danger de la vie", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_47",
    version: "0001",
    theme: "IA, gestion des risques, évaluation",
    question: "Max entreprend de faire avec des amis un trek à vélo en montagnes. Évaluez l'ampleur du risque suivant : durant la descente, Max chute et finit dans les ronces. Il a quelques égratignures et souffre d'une fracture de la clavicule.",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Pas grave", correct: false },
      { text: "Grave / très grave", correct: true },
      { text: "Mise en danger de la vie", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_48",
    version: "0001",
    theme: "IA, gestion des risques, mesures",
    question: "Max entreprend de faire un trek à vélo en montagnes. Que se passe-t-il si Max s'équipe d'un bon casque, une protection dorsale, de genouillères et de coudières ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Il évite le risque", correct: false },
      { text: "Il réduit / limite le risque", correct: true },
      { text: "Il répercute le risque", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_49",
    version: "0001",
    theme: "IA, gestion des risques, mesures",
    question: "Max entreprend de faire un trek à vélo en montagnes. Que se passe-t-il si Max clarifie sa couverture d'accident et de responsabilité civile privée, puis si nécessaire conclut une nouvelle assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Il évite le risque", correct: false },
      { text: "Il réduit / limite le risque", correct: false },
      { text: "Il répercute le risque", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_50",
    version: "0001",
    theme: "IA, assurances obligatoires",
    question: "Lesquelles des assurances suivantes sont obligatoires en Suisse ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Assurance maladie (assurance de base)", correct: true },
      { text: "Assurance maladie (assurance complémentaire)", correct: false },
      { text: "Assurance accident professionnelle et non-professionnelle pour employé", correct: true },
      { text: "Assurance accident professionnelle et non-professionnelle pour indépendant", correct: false },
      { text: "Prévoyance professionnelle (caisse de pensions) pour indépendant", correct: false },
      { text: "Assurance responsabilité civile pour véhicules à moteur", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_51",
    version: "0001",
    theme: "IA, gestion des risques, moral hazard",
    question: "Qu'est-ce que le « Moral Hazard » ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le moral hazard est le fait de favoriser l'imprévoyance", correct: true },
      { text: "Le moral hazard est le synonyme de la loi des grands nombres", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "ind_52",
    version: "0001",
    theme: "IA, caractéristiques de l'assurance, loi des grands nombres",
    question: "A quoi correspond la loi des grands nombres ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La loi des grands nombres se base sur les évènements passés pour présager des évènements futurs. La prime de risque se base en grande partie sur ce principe.", correct: true },
      { text: "La loi des grands nombres est le principe permettant de définir les suppléments pour risque rajoutés à la prime de risque.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },

  // =============================================
  // SÉRIE 2012 - Questions QCM
  // =============================================
  {
    id: "s12_6",
    version: "0001",
    theme: "C+P, bases juridiques, responsabilité civile",
    question: "Le code des obligations (CO art. 56) définit la responsabilité du détenteur d'animaux. Quelle affirmation est exacte ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Un détenteur d'animaux est responsable exclusivement en cas de faute.", correct: false },
      { text: "Un détenteur d'animaux est toujours responsable (responsabilité causale aggravée).", correct: false },
      { text: "Un détenteur d'animaux est responsable à moins qu'il ne prouve qu'il a gardé et surveillé l'animal en question avec toute l'attention requise par les circonstances.", correct: true },
      { text: "La responsabilité du détenteur d'animaux ne s'applique qu'aux animaux domestiques.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_16",
    version: "0001",
    theme: "C+P, assurance technique, assurance de construction",
    question: "L'assurance responsabilité civile du maître de l'ouvrage offre une protection contre les prétentions injustifiées…",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "uniquement en cas de dommages corporels", correct: false },
      { text: "uniquement en cas de dommages matériels", correct: false },
      { text: "uniquement en cas de dommages corporels et matériels", correct: false },
      { text: "en cas de dommages corporels et matériels ainsi que d'atteintes à l'environnement", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_17",
    version: "0001",
    theme: "P+S, LAA, personnes assurées",
    question: "Monsieur Marc Frei travaille en tant que programmeur indépendant. Selon le volume de travail, il engage des collaborateurs temporaires. Comment ces derniers sont-ils assurés en cas d'accident ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Si le rapport de travail dure moins de 3 mois, ils ne sont pas assurés selon la LAA.", correct: false },
      { text: "Ils sont assurés selon la LAA dès le premier jour de travail.", correct: true },
      { text: "Ils ne sont assurés selon la LAA que contre les accidents professionnels.", correct: false },
      { text: "Tant qu'ils sont dans la période d'essai, ils ne sont pas assurés selon la LAA.", correct: false },
      { text: "S'ils gagnent plus de CHF 21060 ils sont assurés selon la LAA.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_18",
    version: "0001",
    theme: "P+S, caisse-maladie, obligation",
    question: "Qui doit s'affilier à l'assurance-maladie obligatoire ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Toute personne qui n'a pas de caisse de pension ni d'assurance-accidents", correct: false },
      { text: "Tout personne qui exerce une activité lucrative en Suisse", correct: false },
      { text: "L'employeur s'en charge pour ses salariés", correct: false },
      { text: "Toute personne domiciliée en Suisse", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_21",
    version: "0001",
    theme: "P+S, LAMal, modèles d'assurance",
    question: "Quels modèles sont des modèles d'assurance alternative prévus par l'assurance obligatoire des soins ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "HMO", correct: true },
      { text: "Modèle médecin de famille", correct: true },
      { text: "Thérapie par cellules fraîches", correct: false },
      { text: "Modèle d'absence de sinistre", correct: false },
      { text: "Choix du médecin et de l'hôpital dans le monde entier", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_24",
    version: "0001",
    theme: "P+S, vie individuelle, impôts",
    question: "Où la prime pour le pilier 3a peut-elle être déduite ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "De l'impôt cantonal", correct: false },
      { text: "Du montant de l'impôt fédéral", correct: false },
      { text: "De l'impôt anticipé", correct: false },
      { text: "Du revenu imposable auprès de la Confédération, du canton et de la commune", correct: true },
      { text: "Du remboursement de l'impôt anticipé", correct: false },
      { text: "De la fortune imposable auprès de la Confédération et du canton", correct: false },
      { text: "De la déclaration fiscale", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_26",
    version: "0001",
    theme: "P+S, LAA, durée d'assurance",
    question: "Quand l'assurance prend-elle fin selon la LAA ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La couverture prend fin à minuit le jour où le droit au salaire prend fin.", correct: false },
      { text: "La couverture prend fin à minuit le jour où le droit à au moins la moitié du salaire prend fin.", correct: false },
      { text: "La couverture prend fin 30 jours après que le droit à au moins la moitié du salaire ou une prestation de remplacement du salaire correspondante a pris fin.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_31",
    version: "0001",
    theme: "P+S, LPP, retraite anticipée",
    question: "Un client souhaite savoir s'il peut prendre une retraite anticipée auprès de sa caisse de pension. Que lui répondez-vous ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Il peut toucher la rente de sa caisse de pension jusqu'à 5 ans à l'avance. Toutefois, la caisse peut procéder à des réductions de rente.", correct: false },
      { text: "Impossible, la loi prévoit l'âge de la retraite à 65 ans (femmes 64 ans).", correct: false },
      { text: "Ceci est possible uniquement si l'entreprise réduit son personnel.", correct: false },
      { text: "Le règlement de la caisse de pension peut prévoir une retraite anticipée.", correct: true },
      { text: "Les rentes LPP peuvent être perçues jusqu'à 2 ans à l'avance ou différées jusqu'à 5 ans.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_32",
    version: "0001",
    theme: "P+S, LAA, chômeurs",
    question: "Les bénéficiaires d'indemnités de chômage sont obligatoirement assurés selon la LAA. Qui propose cette couverture d'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La caisse supplétive", correct: false },
      { text: "L'assureur LAA de l'entreprise dans laquelle le travailleur était employé en dernier", correct: false },
      { text: "La Suva", correct: true },
      { text: "L'institution supplétive", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_46",
    version: "0001",
    theme: "IA, gestion des risques, objectif",
    question: "Parmi les affirmations ci-dessous, laquelle décrit le mieux le sens et le but de la gestion des risques ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Optimiser le portefeuille d'assurance", correct: false },
      { text: "Eviter les risques en tous genres", correct: false },
      { text: "Découvrir les lacunes d'assurance", correct: false },
      { text: "Traiter les risques en connaissance de cause et de manière systématique", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_47",
    version: "0001",
    theme: "IA, caractéristiques de l'assurance",
    question: "Parmi les caractéristiques suivantes, lesquelles sont des caractéristiques typiques d'une assurance ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Prétention à une prestation à la survenance de l'événement assuré", correct: true },
      { text: "Prestations d'assistance", correct: false },
      { text: "Mutualité", correct: true },
      { text: "Collaborateur du service externe", correct: false },
      { text: "Hasard", correct: true },
      { text: "Loi des grands nombres", correct: true },
      { text: "Droit à un service de sinistres", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_52",
    version: "0001",
    theme: "Droit, LCA, dispositions impératives",
    question: "L'art. 46a LCA (lieu d'exécution) est un article impératif. Parmi les affirmations suivantes, laquelle est exacte ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le lieu d'exécution est le siège de l'assureur à l'étranger.", correct: false },
      { text: "Le lieu d'exécution est le siège suisse de l'assuré ou du preneur d'assurance.", correct: true },
      { text: "Le lieu d'exécution est l'endroit où la chose assurée se trouve.", correct: false },
      { text: "Le lieu d'exécution est le lieu du sinistre.", correct: false },
      { text: "Le lieu d'exécution est le siège suisse de l'assureur.", correct: false },
      { text: "Le lieu d'exécution est le siège suisse du courtier.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_56",
    version: "0001",
    theme: "Droit, CO, fin du mandat",
    question: "Le client Meier résilie avec effet immédiat le mandat de courtier avec Superbroke SA sans respecter un délai de préavis. Quelle affirmation est correcte ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La résiliation est valable.", correct: true },
      { text: "Le délai de résiliation est de 3 mois.", correct: false },
      { text: "La résiliation n'est pas valable, car le mandat de courtier prévoit un délai de résiliation de 3 mois.", correct: false },
      { text: "Le délai de résiliation est de 30 jours pour la fin d'un mois.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_58",
    version: "0001",
    theme: "Droit, LSA, surveillance des intermédiaires",
    question: "A quelle condition l'intermédiaire non lié peut-il exercer son activité d'intermédiaire ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "S'il a passé l'examen de spécialiste en assurances avec brevet fédéral", correct: false },
      { text: "S'il a conclu une assurance responsabilité civile professionnelle avec une somme d'assurance de CHF 2 mio.", correct: false },
      { text: "S'il est inscrit au registre des intermédiaires d'assurance", correct: true },
      { text: "S'il a passé l'examen d'intermédiaire d'assurance AFA", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_60",
    version: "0001",
    theme: "Droit, LCA, interdiction de changements",
    question: "Quel est le but de l'interdiction de changements dans l'assurance contre les dommages ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "L'objet assuré ne doit pas être modifié afin que la tarification reste correcte.", correct: false },
      { text: "La loi ne connaît pas d'interdiction de changements.", correct: false },
      { text: "Déterminer la cause du dommage et l'étendue de celui-ci.", correct: true },
      { text: "Diminuer les coûts du dommage.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_61",
    version: "0001",
    theme: "Droit, LCA, prise d'effet du contrat",
    question: "Monsieur Manser signe le 22 septembre la proposition pour une assurance inventaire du ménage et la remet à son intermédiaire. Le début de l'assurance a été fixé au 23 septembre. Le 25 septembre, son appartement est cambriolé. L'assureur n'avait pas réagi jusqu'à maintenant. Quelle affirmation est correcte selon la LCA ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le cambriolage n'est pas assuré, car le contrat n'est pas encore conclu.", correct: true },
      { text: "Le cambriolage est assuré, car la proposition était signée.", correct: false },
      { text: "Le contrat d'assurance est nul.", correct: false },
      { text: "Monsieur Manser a droit à des prestations d'assurance, car il avait donné la première prime à l'intermédiaire.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_63",
    version: "0001",
    theme: "Droit, LCA, paiement des primes",
    question: "Qui est le débiteur de la première prime ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le preneur d'assurance", correct: true },
      { text: "La personne assurée", correct: false },
      { text: "Le bénéficiaire", correct: false },
      { text: "Le cessionnaire", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_64",
    version: "0001",
    theme: "Droit, LBA, ayant droit économique",
    question: "Sélectionnez la définition exacte du terme « ayant droit économique ».",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La banque qui reçoit le paiement", correct: false },
      { text: "Le preneur de contrat", correct: false },
      { text: "Le bailleur de fonds responsable du paiement des primes", correct: true },
      { text: "La/les bénéficiaire(s)", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_65",
    version: "0001",
    theme: "Droit, LCA, police d'assurance",
    question: "Quelle est la signification de la police pour la couverture d'assurance ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "C'est un document que l'assureur établit à titre facultatif par sympathie pour le client.", correct: false },
      { text: "Elle sert aux parties en tant que preuve de ce qui est assuré.", correct: true },
      { text: "Elle n'est pertinente que pour l'assurance vie, car elle peut être mise en gage.", correct: false },
      { text: "Le contrat d'assurance n'est réputé conclu que lorsque le preneur d'assurance a reçu la police.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_67",
    version: "0001",
    theme: "Droit, LCA, réassurance",
    question: "Les contrats de réassurance sont-ils soumis à la loi sur le contrat d'assurance (LCA) ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Oui", correct: false },
      { text: "Non", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_69",
    version: "0001",
    theme: "Droit, LCA, contenu de la police",
    question: "Lorsque le client reçoit la police, il doit annoncer les éventuelles erreurs à la compagnie d'assurance. De combien de temps dispose-t-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "1 semaine", correct: false },
      { text: "2 semaines", correct: false },
      { text: "4 semaines", correct: true },
      { text: "1 mois", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },

  // =============================================
  // SÉRIE 2018 - Questions QCM
  // =============================================
  {
    id: "s18_1",
    version: "0001",
    theme: "P+S, vie individuelle, impôts",
    question: "Où la prime pour le pilier 3a peut-elle être déduite ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "De l'impôt cantonal", correct: false },
      { text: "Du montant de l'impôt fédéral", correct: false },
      { text: "De l'impôt anticipé", correct: false },
      { text: "Du revenu imposable auprès de la Confédération, du canton et de la commune", correct: true },
      { text: "Du remboursement de l'impôt anticipé", correct: false },
      { text: "De la fortune imposable auprès de la Confédération et du canton", correct: false },
      { text: "De la déclaration fiscale", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_lpp_conv",
    version: "0001",
    theme: "P+S, LPP, taux de conversion",
    question: "A quoi sert le taux de conversion ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Ce pourcentage permet de calculer les rentes de vieillesse.", correct: true },
      { text: "C'est le taux d'intérêt utilisé pour rémunérer les bonifications de vieillesse.", correct: false },
      { text: "Cette valeur permet de calculer le taux de rente pour le versement en capital.", correct: false },
      { text: "Ce taux permet de calculer les primes pour les prestations de risque.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_avs_cot",
    version: "0001",
    theme: "P+S, AVS/AI, cotisations",
    question: "Les personnes sans activité lucrative sont également soumises à cotisations AVS. Sur quelle base leurs cotisations sont-elles calculées ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Fortune multipliée par 20 + revenu des rentes", correct: false },
      { text: "Fortune + revenu des rentes multipliés par 30", correct: false },
      { text: "Fortune + revenus des rentes multipliés par 20", correct: true },
      { text: "Un vingtième de la fortune et du revenu des rentes conjugués", correct: false },
      { text: "Cotisation minimale forfaitaire", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_vie_benef",
    version: "0001",
    theme: "P+S, vie individuelle, clause bénéficiaire",
    question: "Qui perçoit la prestation de l'assurance vie mixte (3b) en cas de décès de l'assuré ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le payeur de primes", correct: false },
      { text: "Le bénéficiaire", correct: true },
      { text: "Les héritiers dans tous les cas", correct: false },
      { text: "C'est déterminé par la loi", correct: false },
      { text: "Le preneur d'assurance", correct: false },
      { text: "Le conjoint et les enfants", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_rc_ent",
    version: "0001",
    theme: "C+P, assurance RC d'entreprise, couverture",
    question: "Quelles prétentions de personnes sont exclues de l'assurance RC d'une entreprise individuelle ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Nouveau client visitant les locaux commerciaux", correct: false },
      { text: "Preneur d'assurance", correct: true },
      { text: "Personnel propre", correct: false },
      { text: "Participants à un séminaire de perfectionnement annoncé publiquement", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_dom_eco",
    version: "0001",
    theme: "C+P, responsabilité civile d'entreprise, dommages économiques purs",
    question: "Qu'entend-on par dommages économiques purs ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Dommages économiques qui ne résultent pas d'un dommage corporel et/ou matériel assuré.", correct: true },
      { text: "Dommages économiques qui ne résultent pas d'un dommage corporel assuré.", correct: false },
      { text: "Dommages économiques qui résultent d'un dommage corporel ou matériel assuré.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_rc_imm",
    version: "0001",
    theme: "C+P, responsabilité civile immeubles, prime",
    question: "Quels facteurs déterminants influencent le montant de la prime dans la responsabilité civile immeubles ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Prix d'achat", correct: false },
      { text: "Type de bâtiment", correct: true },
      { text: "Montant de la somme de garantie", correct: true },
      { text: "Rapports de propriété", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_bat_fac",
    version: "0001",
    theme: "C+P, assurance de bâtiments, cantons",
    question: "Dans quels cantons l'assurance incendie des bâtiments est-elle facultative ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Genève, Tessin, Valais, Appenzell Rhodes-Intérieures", correct: true },
      { text: "Genève, Tessin, Schwyz", correct: false },
      { text: "Genève, Berne, Zurich et Vaud", correct: false },
      { text: "Bâle-Ville, Tessin et Obwald", correct: false },
      { text: "Tessin, Appenzell Rhodes-Extérieures et St-Gall", correct: false },
      { text: "Grisons, Uri, Obwald", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_vam_carte",
    version: "0001",
    theme: "C+P, VAM, carte verte",
    question: "Qu'est-ce que la carte d'assurance internationale (carte verte) ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La carte d'assurance internationale confirme l'existence d'une assurance-frontière en dehors de la validité territoriale de l'assurance véhicules à moteur.", correct: false },
      { text: "La carte d'assurance internationale constitue un certificat d'assurance reconnu au sein de l'Europe.", correct: true },
      { text: "La carte d'assurance internationale constitue une attestation d'assurance reconnue en Suisse.", correct: false },
      { text: "Pour les véhicules en leasing, la carte d'assurance internationale doit se trouver obligatoirement dans le véhicule.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s18_bases_resp",
    version: "0001",
    theme: "C+P, bases juridiques, conditions de responsabilité",
    question: "Les conditions de la responsabilité selon l'art. 41 CO sont :",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Dommage", correct: true },
      { text: "Faute", correct: true },
      { text: "Lien de causalité adéquat", correct: true },
      { text: "Caractère illicite", correct: true },
      { text: "Lien de causalité naturel", correct: false },
      { text: "Violation du devoir de diligence", correct: false }
    ],
    points: 1,
    complexity: "Moyenne"
  },

  // =============================================
  // SÉRIE 2021 - Questions QCM
  // =============================================
  {
    id: "s21_laa_empl",
    version: "0001",
    theme: "P+S, LAA, plusieurs employeurs",
    question: "Jean Gloor est programmeur chez deux employeurs (50% chacun) et touche un salaire de CHF 75'000 par an et par employeur. Quelles sont les deux affirmations exactes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Pour les primes, le salaire total s'applique, pour les prestations le salaire maximal LAA.", correct: true },
      { text: "Le deuxième employeur peut uniquement assurer la différence entre CHF 75'000 et le maximum LAA CHF 148'200 par an.", correct: false },
      { text: "Pour la prime, le salaire est réduit proportionnellement auprès de chaque employeur.", correct: false },
      { text: "Les prestations sont calculées au total sur CHF 148'200", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_1er_pilier",
    version: "0001",
    theme: "P+S, 1er pilier, personnes soumises à cotisation",
    question: "Parmi les personnes suivantes, lesquelles sont soumises à cotisation pour l'AVS à titre obligatoire ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Apprenti de 16 ans dans une entreprise de produits chimiques à Bâle", correct: false },
      { text: "Personne de 63 ans en retraite anticipée dans le canton de Vaud", correct: true },
      { text: "Bénéficiaire de rente d'invalidité de 45 ans sans revenu", correct: true },
      { text: "Travailleur indépendant de 55 ans", correct: true },
      { text: "Femme de ménage de 40 ans, travaille 4 heures par semaine à titre accessoire", correct: true },
      { text: "Etudiant en informatique de 18 ans", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_avs_calc",
    version: "0001",
    theme: "P+S, 1er pilier, calcul des prestations",
    question: "Quelles sont les informations nécessaires pour le calcul du droit à une rente de vieillesse de l'AVS ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Domicile", correct: false },
      { text: "Sexe", correct: true },
      { text: "Nombre d'années de cotisation", correct: true },
      { text: "Montant de l'allocation pour enfants", correct: false },
      { text: "Confession", correct: false },
      { text: "Dates de naissance des enfants", correct: true },
      { text: "Dates de naissance des petits-enfants", correct: false },
      { text: "Montant du revenu", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_laa_ap",
    version: "0001",
    theme: "P+S, 2ème Pilier, LAA",
    question: "Quelles déclarations concernant les accidents professionnels (AP), les accidents non professionnels (ANP) et les maladies professionnelles (MP) sont correctes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Toute personne qui travaille pour plusieurs employeurs pendant un total de 8 heures par semaine est obligatoirement assurée au titre de l'ANP", correct: true },
      { text: "L'employeur et l'employé supportent à parts égales les coûts de l'assurance accident", correct: false },
      { text: "Les maladies professionnelles sont répertoriées dans la LAA", correct: true },
      { text: "La couverture de l'AP commence avec l'arrivée sur le lieu de travail (entrée dans le bâtiment)", correct: false },
      { text: "La couverture de l'ANP expire deux semaines après la fin de la relation de travail.", correct: false },
      { text: "Un accident de sport d'un travailleur pendant ses vacances dans le sud de la France donne droit à des prestations de la LAA.", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_lpp_prest",
    version: "0001",
    theme: "P+S, LPP, prestations d'assurance",
    question: "Dans la liste ci-dessous, quels types de prestations sont assurés dans la LPP ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Rente de veuve/veuf", correct: true },
      { text: "Rente pour enfant de retraité", correct: true },
      { text: "Capital d'invalidité", correct: false },
      { text: "Frais funéraires", correct: false },
      { text: "Rente d'orphelin", correct: true },
      { text: "Rente pour enfant d'invalide", correct: true },
      { text: "Rente complémentaire pour le conjoint en cas d'invalidité", correct: false },
      { text: "Rente d'invalidité", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_lpp_ret",
    version: "0001",
    theme: "P+S, LPP, retraite anticipée",
    question: "Un client souhaite savoir s'il peut prendre une retraite anticipée auprès de sa caisse de pension. Que lui répondez-vous ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Il peut toucher la rente de sa caisse de pension jusqu'à 5 ans à l'avance. Toutefois, la caisse peut procéder à des réductions de rente.", correct: false },
      { text: "Impossible, la loi prévoit l'âge de la retraite à 65 ans (femmes 64 ans).", correct: false },
      { text: "Ceci est possible uniquement si l'entreprise réduit son personnel.", correct: false },
      { text: "Le règlement de la caisse de pension peut prévoir une retraite anticipée à partir de 58 ans.", correct: true },
      { text: "Les rentes LPP peuvent être perçues jusqu'à 2 ans à l'avance ou différées jusqu'à 5 ans.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s21_apg",
    version: "0001",
    theme: "P+S, APG, prestations",
    question: "Le régime des allocations pour perte de gain règle le remplacement de pertes de revenu. Pour quelles prestations l'APG est-elle appliquée ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Service militaire", correct: true },
      { text: "Service civil", correct: true },
      { text: "Service des sapeurs-pompiers", correct: false },
      { text: "Corps des gardes-frontière", correct: false },
      { text: "Jeunesse + Sport", correct: true },
      { text: "Cours de samaritain", correct: false },
      { text: "Engagement pour Spitex", correct: false },
      { text: "Moniteurs de cours pour jeunes tireurs", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_regimes",
    version: "0001",
    theme: "P+S, régimes matrimoniaux",
    question: "En Suisse, plusieurs régimes matrimoniaux coexistent selon le CC. Quels sont-ils ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Participation réduite aux acquêts", correct: true },
      { text: "Liquidation du régime matrimonial", correct: false },
      { text: "Communauté de biens", correct: true },
      { text: "Communauté universelle", correct: false },
      { text: "Séparation de biens", correct: true },
      { text: "Union des biens", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_lamal",
    version: "0001",
    theme: "P+S, LAMal, affirmations",
    question: "Parmi les affirmations suivantes relatives à la loi sur l'assurance-maladie (LAMal), lesquelles sont correctes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Les primes en LAMal sont fonction des paramètres suivants: âge, domicile, franchise et modèle d'assurance.", correct: true },
      { text: "La prime LAMal s'entend par personne.", correct: true },
      { text: "La LAMal ne comprend pas les méthodes thérapeutiques alternatives.", correct: false },
      { text: "L'assuré décide librement du montant de sa franchise.", correct: false },
      { text: "Relèvent de l'assurance obligatoire les personnes domiciliées en Suisse.", correct: true },
      { text: "Les femmes et les hommes paient des primes différentes.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s21_avs_rench",
    version: "0001",
    theme: "P+S, rentes AVS, renchérissement",
    question: "A quelles conditions les rentes de vieillesse AVS sont-elles adaptées au renchérissement ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Régulièrement tous les trois ans", correct: false },
      { text: "Lorsque le renchérissement dépasse 4% sur une année", correct: false },
      { text: "Régulièrement tous les deux ans", correct: true },
      { text: "Le Conseil fédéral peut définir librement cette adaptation. Par le passé, il a procédé à une adaptation tous les deux ans.", correct: true },
      { text: "Lorsque cela est demandé par le Parlement", correct: false },
      { text: "Les prestations de rente peuvent être adaptées au renchérissement lorsque la situation financière de l'assurance le permet.", correct: false }
    ],
    points: 1,
    complexity: "Moyenne"
  },
  {
    id: "s21_rc_prop",
    version: "0001",
    theme: "C+P, responsabilité civile immeubles, propriété par étage",
    question: "Le vélo d'un des propriétaires par étage rangé dans le local commun de l'immeuble est endommagé suite à l'effondrement du revêtement du plafond. Le dommage se monte à CHF 1500. Quelle indemnisation le propriétaire peut-il faire valoir ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "Le montant total du dommage", correct: false },
      { text: "Aucune prétention (propre dommage)", correct: false },
      { text: "Le montant du dommage sous déduction de sa quote-part de propriété", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s21_lpp_bases",
    version: "0001",
    theme: "P+S, LPP, bases juridiques",
    question: "Quels sont les fondements juridiques de la prévoyance professionnelle ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Constitution fédérale, art. 113", correct: true },
      { text: "LPP", correct: true },
      { text: "Loi sur le contrat d'assurance LCA", correct: false },
      { text: "CO (droit sur le contrat de travail)", correct: true },
      { text: "CC (fondations)", correct: true },
      { text: "Loi fédérale sur l'assurance-maladie LAMal", correct: false },
      { text: "Loi sur le libre passage", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_36",
    version: "0001",
    theme: "IA, financement, intérêt technique",
    question: "Quelles sont les réponses correctes concernant le taux d'intérêt technique ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "L'intérêt technique est le taux minimum garanti pour toute la durée du contrat qui est servi sur la part d'épargne de la prime lorsqu'il s'agit d'assurances constitutives de capital.", correct: true },
      { text: "L'intérêt technique est une forme de participation aux excédents.", correct: false },
      { text: "C'est la valeur exprimée en pour cent pour le rendement pendant une période donnée.", correct: false },
      { text: "C'est la variation en pour cent de la valeur d'un investissement.", correct: false },
      { text: "Les primes d'épargne de la réserve mathématique sont au moins rémunérées à ce taux.", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_38",
    version: "0001",
    theme: "IA, entreprise d'assurance, qualité de service",
    question: "Quels sont les 5 critères clés pour qu'un client considère une prestation de service comme « bonne » (qualité de service) ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Intelligence des collaborateurs", correct: false },
      { text: "Fiabilité", correct: true },
      { text: "Capacité de réaction", correct: true },
      { text: "Publicité et mesures RP", correct: false },
      { text: "Présentation extérieure", correct: true },
      { text: "Obligeance", correct: true },
      { text: "Compétence", correct: true },
      { text: "Utilisation des technologies les plus récentes", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_34",
    version: "0001",
    theme: "P+S, AVS, cercle de personnes",
    question: "Parmi les personnes vivant en Suisse ci-dessous, lesquelles doivent payer des cotisations AVS ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Diplômée universitaire de 23 ans sans revenu", correct: true },
      { text: "Homme de 63 ans au bénéfice d'une rente AVS anticipée et sans revenu provenant d'une activité lucrative", correct: true },
      { text: "Héritière de 44 ans qui vit de sa fortune", correct: true },
      { text: "Gymnasien de 18 ans", correct: false },
      { text: "Rentier AVS de 67 ans avec un revenu accessoire mensuel de CHF 1500", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_55",
    version: "0001",
    theme: "Droit, CO, mandat",
    question: "L'intermédiaire non lié recommande au client la couverture de caisse-maladie la plus chère selon la LAMal bien que le preneur d'assurance ait demandé la moins chère. Quelles sont les conséquences ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "L'intermédiaire est responsable de la prime supplémentaire vis-à-vis du preneur d'assurance.", correct: true },
      { text: "Le contrat d'assurance n'est pas réputé conclu.", correct: false },
      { text: "Le mandat de courtier n'est pas rempli.", correct: true }
    ],
    points: 1,
    complexity: "Simple"
  },
  {
    id: "s12_51",
    version: "0001",
    theme: "IA, caractéristiques de l'assurance, cumul",
    question: "Chaque assureur prévoit le calcul des dépenses de sinistres dans son portefeuille et essaie d'éviter les cumuls. Quels points prend-il en considération ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Risques avec caractéristiques aussi homogènes que possible", correct: true },
      { text: "Risques bien répartis géographiquement", correct: true },
      { text: "Sélection de risques avec bonne évolution des sinistres", correct: true },
      { text: "Réalisation d'un portefeuille d'assurance aussi important que possible", correct: true },
      { text: "Choix d'une franchise de CHF 10'000 minimum", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "ind_26",
    version: "0001",
    theme: "Droit, LSA, intermédiaire d'assurance lié",
    question: "Quelles affirmations sont correctes concernant l'intermédiaire d'assurance ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "Est considéré comme intermédiaire lié une personne réalisant des commissions avec une ou deux compagnies d'assurance.", correct: true },
      { text: "Pour l'intermédiaire lié, l'inscription au registre professionnel est facultative.", correct: true },
      { text: "Le contrôle des intermédiaires liés est régi par la LCA.", correct: false },
      { text: "L'intermédiaire d'assurance est tenu de conclure une assurance RC professionnelle d'au moins CHF 2 mios ou de prouver une garantie financière équivalente.", correct: true }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_59",
    version: "0001",
    theme: "Droit, LCA, justification frauduleuse",
    question: "Votre client s'est fait voler son sac de sport. Le vol est assuré. Le client déclare notamment le vol d'une paire de chaussures de sport et d'une raquette de tennis, bien que ces objets ne se trouvaient pas dans le sac. L'assureur prouve l'intention frauduleuse. Quelles affirmations sont correctes ?",
    instruction: "Cochez les bonnes réponses. Des points sont déduits en cas de fausses réponses!",
    answers: [
      { text: "L'assureur n'est pas lié par le contrat.", correct: true },
      { text: "L'assureur ne doit pas fournir de prestations.", correct: true },
      { text: "L'assureur doit indemniser les choses effectivement volées, mais pas les chaussures de sport et la raquette.", correct: false },
      { text: "L'assureur doit indemniser toutes les choses volées et peut se départir du contrat.", correct: false },
      { text: "L'assureur peut faire valoir une réticence avec toutes les conséquences que cela entraîne.", correct: false }
    ],
    points: 2,
    complexity: "Moyenne"
  },
  {
    id: "s12_66",
    version: "0001",
    theme: "Droit, LCA, sommation légale",
    question: "Un client n'a pas payé sa prime pour l'assurance ménage, la compagnie lui a envoyé une sommation légale. Il n'a payé qu'un mois après réception. Trois semaines après réception de la sommation, il a endommagé son lavabo. Que se passe-t-il ?",
    instruction: "Cochez la bonne réponse.",
    answers: [
      { text: "La compagnie refuse la couverture.", correct: true },
      { text: "La compagnie prend en charge le sinistre.", correct: false }
    ],
    points: 1,
    complexity: "Simple"
  }
];

// Utility: generate random test series (17-25 questions)
export function generateTestSeries(): Question[] {
  const count = Math.floor(Math.random() * 9) + 17; // 17 to 25
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Utility: get unique themes
export function getThemes(): string[] {
  return [...new Set(questions.map(q => q.theme.split(",")[0].trim()))].sort();
}

// Stats
export function getQuestionStats() {
  const simple = questions.filter(q => q.complexity === "Simple").length;
  const moyenne = questions.filter(q => q.complexity === "Moyenne").length;
  const themes = getThemes();
  return {
    total: questions.length,
    simple,
    moyenne,
    themes: themes.length,
    themeList: themes
  };
}
