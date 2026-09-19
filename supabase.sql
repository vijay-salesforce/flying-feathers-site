create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  age_group text,
  message text,
  created_at timestamptz default now()
);
-- Public form writes go through the server route using the service role key.
alter table enquiries enable row level security;
