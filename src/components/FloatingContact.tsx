import React from 'react';
import { MessageCircle } from 'lucide-react';
import { tenant } from '../tenantConfig';

export default function FloatingContact() {
  if (!tenant.whatsappLink) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a href={tenant.whatsappLink} className="cursor-pointer w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_24px_rgba(222,149,70,0.5)] hover:bg-brand-orange transition-all duration-200">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
