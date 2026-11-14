DROP POLICY IF EXISTS "Anyone can sign up for early access" ON public.early_access_signups;
CREATE POLICY "Anyone can sign up for early access with valid details"
ON public.early_access_signups FOR INSERT TO anon, authenticated
WITH CHECK (
  welcome_sent_at IS NULL
  AND char_length(btrim(first_name)) BETWEEN 1 AND 100
  AND char_length(btrim(last_name)) BETWEEN 1 AND 100
  AND char_length(email) <= 255
  AND email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  AND (company IS NULL OR char_length(company) <= 200)
  AND (team_size IS NULL OR char_length(team_size) <= 50)
  AND (meeting_tool IS NULL OR char_length(meeting_tool) <= 50)
  AND (meeting_problem IS NULL OR char_length(meeting_problem) <= 1000)
);