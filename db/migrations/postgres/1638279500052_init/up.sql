SET check_function_bodies = false;
CREATE TABLE public.long_tails (
    tail text NOT NULL,
    json_id integer NOT NULL
);
ALTER TABLE ONLY public.long_tails
    ADD CONSTRAINT tails_pkey PRIMARY KEY (tail);
