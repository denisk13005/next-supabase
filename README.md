intallation du projet
création d'un projet dans supabase pour les lier
insertion des clé dans le .env

anon key sert a autorisé l'insert des users (a configurer dans la bdd supabase)
SERVICE_ROLE key sert a restreindre des actions uniquement pour les admins (a configurer dans la bdd supabase)

on crée l'auth coté client :
on crée le middleware qui va checker si on est auth sinoon redirect vers /login
