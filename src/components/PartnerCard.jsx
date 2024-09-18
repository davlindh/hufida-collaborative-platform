import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const PartnerCard = ({ partner }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    }}
  >
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 bg-white border-2 border-deepGreen-100 transform hover:scale-105">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" loading="lazy" />
          <Badge variant="outline" className="bg-deepGreen-50 text-deepGreen-700 border-deepGreen-200">
            {partner.partnerType}
          </Badge>
        </div>
        <CardTitle className="text-xl text-deepGreen-800 flex items-center">
          {partner.name}
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-deepGreen-600 hover:text-deepGreen-800 transition-colors">
                <ExternalLink size={18} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit {partner.name}'s website</p>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <p className="text-sm text-deepGreen-600">{partner.description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default PartnerCard;