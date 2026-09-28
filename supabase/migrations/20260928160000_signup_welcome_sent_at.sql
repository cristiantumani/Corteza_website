-- When the welcome email went out; the signup-emails function claims a row by setting it,
-- so each signup is emailed once and only real signups get emails
ALTER TABLE public.early_access_signups
  ADD COLUMN IF NOT EXISTS welcome_sent_at TIMESTAMP WITH TIME ZONE;
