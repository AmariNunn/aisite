export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      form_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string;
          phone: string;
          message: string | null;
          agent_type: string;
          business_info: string | null;
          call_volume: string;
          desired_outcomes: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company: string;
          phone: string;
          message?: string | null;
          agent_type: string;
          business_info?: string | null;
          call_volume: string;
          desired_outcomes?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string;
          phone?: string;
          message?: string | null;
          agent_type?: string;
          business_info?: string | null;
          call_volume?: string;
          desired_outcomes?: string | null;
          created_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
