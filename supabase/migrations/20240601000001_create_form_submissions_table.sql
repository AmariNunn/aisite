CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  agent_type TEXT,
  business_info TEXT,
  call_volume TEXT,
  desired_outcomes TEXT,
  email TEXT
);

alter publication supabase_realtime add table form_submissions;