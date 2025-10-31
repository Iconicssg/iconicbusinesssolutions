-- Create table for candidate applications (from both CandidateForm and CandidateRegistration)
CREATE TABLE public.candidate_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  experience INTEGER NOT NULL,
  skills TEXT NOT NULL,
  resume_url TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for employer inquiries (from both EmployerZoneCTA and EmployerZone)
CREATE TABLE public.employer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  requirement TEXT NOT NULL,
  contact_time TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for contact messages (from Contact page)
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.candidate_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employer_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit forms)
CREATE POLICY "Anyone can submit candidate applications"
ON public.candidate_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can submit employer inquiries"
ON public.employer_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view submissions (for admin access)
CREATE POLICY "Authenticated users can view candidate applications"
ON public.candidate_applications
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view employer inquiries"
ON public.employer_inquiries
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (true);