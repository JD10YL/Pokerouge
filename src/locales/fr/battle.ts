import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "Un {{bossName}} apparaît.",
  "trainerAppeared": "Un combat est lancé\npar {{trainerName}} !",
  "singleWildAppeared": "Un {{pokemonName}} sauvage apparaît !",
  "multiWildAppeared": "Un {{pokemonName1}} et un {{pokemonName2}}\nsauvages apparaissent !",
  "playerComeBack": "{{pokemonName}}, on change !\nReviens !",
  "trainerComeBack": "{{trainerName}} retire {{pokemonName}} !",
  "playerGo": "{{pokemonName}} ! Go !",
  "trainerGo": "{{pokemonName}} est envoyé par\n{{trainerName}} !",
  "switchQuestion": "Voulez-vous changer\n{{pokemonName}} ?",
  "trainerDefeated": `Vous avez battu\n{{trainerName}} !`,
  "pokemonCaught": "Vous avez attrapé {{pokemonName}} !",
  "pokemon": "Pokémon",
  "sendOutPokemon": "{{pokemonName}} ! Go !",
  "hitResultCriticalHit": "Coup critique!",
  "hitResultSuperEffective": "C’est super efficace!",
  "hitResultNotVeryEffective": "Ce n’est pas très efficace…",
  "hitResultNoEffect": "Ça n’affecte pas {{pokemonName}}…",
  "hitResultOneHitKO": "K.O. en un coup!",
  "attackFailed": "Mais cela échoue !",
  "attackHitsCount": `Touché {{count}} fois !`,
  "expGain": "{{pokemonName}} gagne\n{{exp}} Points d’Exp !",
  "levelUp": "{{pokemonName}} monte au\nN. {{level}} !",
  "learnMove": "{{pokemonName}} apprend \n{{moveName}} !",
  "learnMovePrompt": "{{pokemonName}} veut apprendre\n{{moveName}}.",
  "learnMoveLimitReached": "Cependant, {{pokemonName}} connait\ndéjà quatre capacités.",
  "learnMoveReplaceQuestion": "Voulez-vous oublier une capacité\net la remplacer par {{moveName}} ?",
  "learnMoveStopTeaching": "Arrêter d’apprendre\n{{moveName}} ?",
  "learnMoveNotLearned": "{{pokemonName}} n’a pas appris\n{{moveName}}.",
  "learnMoveForgetQuestion": "Quelle capacité doit être oubliée ?",
  "learnMoveForgetSuccess": "{{pokemonName}} oublie comment\nutiliser {{moveName}}.",
  "levelCapUp": "La limite de niveau\na été augmentée à {{levelCap}} !",
  "moveNotImplemented": "{{moveName}} n’est pas encore implémenté et ne peut pas être sélectionné.",
  "moveDisabled": "{{moveName}} est sous entrave !",
  "noPokeballForce": "Une force mystérieuse\nempêche l’utilisation des Poké Balls.",
  "noPokeballTrainer": "Le Dresseur détourne la Ball\nVoler, c’est mal !",
  "noPokeballMulti": "Impossible ! On ne peut pas viser\nquand il y a deux Pokémon!",
  "noPokeballStrong": "Le Pokémon est trop fort pour être capturé !\nVous devez d’abord l’affaiblir !",
  "noEscapeForce": "Une force mystérieuse\nempêche la fuite.",
  "noEscapeTrainer": "On ne s’enfuit pas d’un\ncombat de Dresseurs !",
  "noEscapePokemon": "{{moveName}} de {{pokemonName}}\nempêche {{escapeVerb}} !",
  "runAwaySuccess": "Vous prenez la fuite !",
  "runAwayCannotEscape": "Fuite impossible !",
  "escapeVerbSwitch": "le changement",
  "escapeVerbFlee": "la fuite",
  "notDisabled": "{{moveName}} n’est plus sous entrave !",
  "skipItemQuestion": "Êtes-vous sûr·e de ne pas vouloir prendre d’objet ?",
  "eggHatching": "Oh ?",
  "ivScannerUseQuestion": "Utiliser le Scanner d’IV sur {{pokemonName}} ?"
} as const;