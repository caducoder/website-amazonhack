import { HeroHeader } from '@/components/HeroHeader';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { MapPin, Navigation, Home, Hash } from 'lucide-react';

function Towers() {
  const { user } = useAuth();
  const [towersList, setTowersList] = useState<NetworkTower[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getCompanyTowers = useCallback(async (uid: string) => {
    setLoading(true);
    try {
      const towersCollectionRef = collection(db, "towers");
      const q = query(towersCollectionRef, where("userId", "==", uid));
      const querySnapshot = await getDocs(q);

      const companyTowers: any[] = querySnapshot.docs.map(doc => ({
        key: doc.id,
        ...doc.data(),
      }));

      setTowersList(companyTowers);
    } catch (error) {
      console.error("Erro ao buscar torres:", error);
      toast.error("Erro ao buscar torres. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (user) {
      if (user.uid) {
        getCompanyTowers(user.uid);
      }
    } else if (user === null) {

      router.push("/login");
    }
  }, [user, router, getCompanyTowers]);

  return (
    <div>
      <HeroHeader />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Total de Antenas</h2>
                <p className="text-3xl font-bold text-primary-500 mt-1">{towersList.length}</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-full">
                <Navigation className="h-8 w-8 text-primary-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Antenna Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {towersList.map((antenna) => (
            <div
              key={antenna.key}
              className="bg-white rounded-xl shadow-md border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Antena #{antenna.numeroIdentificacao}</h3>
                    <p className="text-primary-100 mt-1">ID: {antenna.id}</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full">
                    <Navigation className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Coordinates */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Coordenadas</p>
                    <p className="text-sm text-gray-600">
                      Lat: {antenna.lat.toFixed(6)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Lng: {antenna.lng.toFixed(6)}
                    </p>
                  </div>
                </div>

                {(antenna.logradouro || antenna.bairro || antenna.municipio || antenna.cep) && (
                  <div className="flex items-start space-x-3">
                    <Home className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900">Endereço</p>
                      {antenna.logradouro && (
                        <p className="text-sm text-gray-600 truncate">
                          {antenna.logradouro.trim()}
                        </p>
                      )}
                      {antenna.bairro && (
                        <p className="text-sm text-gray-600">
                          {antenna.bairro.trim()}
                        </p>
                      )}
                      {antenna.municipio && (
                        <p className="text-sm text-gray-600">
                          {antenna.municipio}
                        </p>
                      )}
                      {antenna.cep && (
                        <p className="text-sm text-gray-600">
                          CEP: {antenna.cep}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {!antenna.logradouro && !antenna.bairro && !antenna.municipio && !antenna.cep && (
                  <div className="flex items-start space-x-3">
                    <Home className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Endereço</p>
                      <p className="text-sm text-gray-500 italic">
                        Informações não disponíveis
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <Hash className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Identificação</p>
                    <p className="text-sm text-gray-600">
                      Key: {antenna.key}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-silver">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Ativa
                  </span>
                  <button className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors duration-200">
                    Ver detalhes →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no antennas) */}
        {towersList.length === 0 && (
          <div className="text-center py-12">
            <Navigation className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Nenhuma antena encontrada</h3>
            <p className="text-gray-600 mt-1">
              Não há antenas cadastradas no sistema no momento.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Towers;