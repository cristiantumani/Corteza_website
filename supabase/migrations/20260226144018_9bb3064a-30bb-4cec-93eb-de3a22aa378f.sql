-- Deny all UPDATE operations on signups
CREATE POLICY "No updates to signups"
ON public.early_access_signups
FOR UPDATE
USING (false);

-- Deny all DELETE operations on signups
CREATE POLICY "No deletes of signups"
ON public.early_access_signups
FOR DELETE
USING (false);