-- Early access: questions that tell us whether a team fits the private beta
ALTER TABLE public.early_access_signups
  ADD COLUMN IF NOT EXISTS company TEXT CHECK (char_length(company) <= 100),
  ADD COLUMN IF NOT EXISTS team_size TEXT CHECK (char_length(team_size) <= 20),
  ADD COLUMN IF NOT EXISTS meeting_tool TEXT CHECK (char_length(meeting_tool) <= 50),
  ADD COLUMN IF NOT EXISTS meeting_problem TEXT CHECK (char_length(meeting_problem) <= 1000);
