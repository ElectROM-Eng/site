import { useState, useEffect } from 'react'
import partnersConfig from '../data/partners.json'

// Este hook será expandido para integrar com WordPress CMS no futuro
export const usePartners = (options = {}) => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {
    filterByCategory = null,
    filterByType = null,
    sortByPriority = true,
    useCMS = false // Flag para usar CMS no futuro
  } = options

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true)

        let partnersData

        if (useCMS) {
          // TODO: Implementar conexão com WordPress CMS
          // partnersData = await fetchFromWordPress();
          console.log('CMS integration not implemented yet. Using local data.')
          partnersData = partnersConfig.partners
        } else {
          // Usar dados locais do JSON
          partnersData = partnersConfig.partners
        }

        // Aplicar filtros
        let filteredPartners = [...partnersData]

        if (filterByCategory) {
          filteredPartners = filteredPartners.filter(
            partner => partner.category === filterByCategory
          )
        }

        if (filterByType) {
          filteredPartners = filteredPartners.filter(
            partner => partner.type === filterByType
          )
        }

        // Ordenar por prioridade se solicitado
        if (sortByPriority) {
          filteredPartners.sort((a, b) => a.priority - b.priority)
        }

        setPartners(filteredPartners)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching partners:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPartners()
  }, [filterByCategory, filterByType, sortByPriority, useCMS])

  // Função para adicionar/atualizar parceiro (futura integração CMS)
  const updatePartner = async (partnerId, updates) => {
    if (useCMS) {
      // TODO: Implementar atualização via WordPress API
      console.log('CMS update not implemented yet')
      return
    }

    // Atualizar dados locais (apenas para desenvolvimento)
    setPartners(prevPartners =>
      prevPartners.map(partner =>
        partner.id === partnerId ? { ...partner, ...updates } : partner
      )
    )
  }

  // Função para adicionar novo parceiro (futura integração CMS)
  const addPartner = async newPartner => {
    if (useCMS) {
      // TODO: Implementar adição via WordPress API
      console.log('CMS add not implemented yet')
      return
    }

    // Adicionar aos dados locais (apenas para desenvolvimento)
    const partnerWithId = {
      ...newPartner,
      id: Math.max(...partners.map(p => p.id)) + 1
    }
    setPartners(prevPartners => [...prevPartners, partnerWithId])
  }

  return {
    partners,
    loading,
    error,
    updatePartner,
    addPartner,
    refresh: () => fetchPartners()
  }
}

/* 
TODO: Função helper para futura integração com WordPress
Será utilizada quando a integração WordPress for implementada

const fetchFromWordPress = async () => {
  const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://your-wp-site.com/wp-json/wp/v2';
  
  try {
    const response = await fetch(`${WP_API_URL}/partners`);
    if (!response.ok) {
      throw new Error('Failed to fetch from WordPress');
    }
    return await response.json();
  } catch (error) {
    console.error('WordPress fetch error:', error);
    throw error;
  }
};
*/

export default usePartners
