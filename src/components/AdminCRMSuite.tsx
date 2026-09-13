/**
 * House Of Form — Enterprise CRM & Admin Suite
 * Orchestrates Lead Pipeline, Atelier Fulfillment, Reservations Ledger,
 * Dynamic Lead Scoring, Swatch Engagement & System Settings.
 */

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  LeadStage,
  LeadTemperature,
  AtelierStatus,
  Lead,
  Reservation,
} from '../types';
import {
  Users,
  Box,
  CreditCard,
  BarChart3,
  Sliders,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  Truck,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Search,
  Filter,
  Eye,
  RefreshCw,
} from 'lucide-react';

export const AdminCRMSuite: React.FC = () => {
  const {
    leads,
    reservations,
    products,
    materials,
    analytics,
    settings,
    updateLeadStage,
    updateAtelierStatus,
    updateSettings,
    resetToSeedData,
  } = useStore();

  const [activeTab, setActiveTab] = useState<
    'leads' | 'reservations' | 'analytics' | 'materials' | 'settings'
  >('leads');

  // Search & Filter for Leads
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('ALL');
  const [selectedTempFilter, setSelectedTempFilter] = useState<string>('ALL');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Filter logic
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.customerName.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.city.toLowerCase().includes(leadSearch.toLowerCase()) ||
      lead.productName.toLowerCase().includes(leadSearch.toLowerCase());

    const matchesStage =
      selectedStageFilter === 'ALL' || lead.stage === selectedStageFilter;
    const matchesTemp =
      selectedTempFilter === 'ALL' || lead.temperature === selectedTempFilter;

    return matchesSearch && matchesStage && matchesTemp;
  });

  const totalReservationRevenue = reservations.reduce(
    (sum, r) => sum + r.reservationFeePaid,
    0
  );
  const totalPipelineValue = reservations.reduce(
    (sum, r) => sum + r.productPrice,
    0
  );

  const getTemperatureBadge = (temp: LeadTemperature) => {
    switch (temp) {
      case 'HOT':
        return 'bg-amber-900/80 text-amber-200 border-amber-600';
      case 'WARM':
        return 'bg-blue-900/80 text-blue-200 border-blue-600';
      case 'NURTURE':
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  return (
    <div className="bg-[#191816] text-[#FBF9F5] min-h-screen">
      
      {/* Top Admin Navigation Bar */}
      <header className="border-b border-[#2C2926] bg-[#121110] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center space-x-3">
              <span className="font-serif text-lg tracking-[0.15em] text-[#FBF9F5]">
                HOUSE OF FORM
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase bg-[#2C2926] text-[#C5A880] px-2.5 py-1 border border-[#3E3A36] font-mono">
                Atelier CRM Engine
              </span>
            </div>

            {/* Tab Navigation */}
            <nav className="flex space-x-1 sm:space-x-2 text-xs font-medium">
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-2 transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'leads'
                    ? 'bg-[#2C2926] text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-[#968E85] hover:text-[#FBF9F5]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Leads ({leads.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('reservations')}
                className={`px-3 py-2 transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'reservations'
                    ? 'bg-[#2C2926] text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-[#968E85] hover:text-[#FBF9F5]'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>Reservations ({reservations.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-2 transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'analytics'
                    ? 'bg-[#2C2926] text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-[#968E85] hover:text-[#FBF9F5]'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Funnel Analytics</span>
              </button>

              <button
                onClick={() => setActiveTab('materials')}
                className={`px-3 py-2 transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'materials'
                    ? 'bg-[#2C2926] text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-[#968E85] hover:text-[#FBF9F5]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Materials ({materials.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3 py-2 transition-colors cursor-pointer flex items-center space-x-1.5 ${
                  activeTab === 'settings'
                    ? 'bg-[#2C2926] text-[#C5A880] border-b-2 border-[#C5A880]'
                    : 'text-[#968E85] hover:text-[#FBF9F5]'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Settings</span>
              </button>
            </nav>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: LEADS & PIPELINE */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {/* Quick KPI Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#23201D] p-4 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85] block">Total Active Leads</span>
                <span className="text-2xl font-serif text-[#FBF9F5] mt-1 block">{leads.length}</span>
                <span className="text-[10px] text-[#A6865A]">High Conversion Rate</span>
              </div>
              <div className="bg-[#23201D] p-4 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85] block">Design Reservations</span>
                <span className="text-2xl font-serif text-[#C5A880] mt-1 block">{reservations.length}</span>
                <span className="text-[10px] text-[#968E85]">₹{totalReservationRevenue.toLocaleString('en-IN')} locked in</span>
              </div>
              <div className="bg-[#23201D] p-4 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85] block">Gross Pipeline Value</span>
                <span className="text-2xl font-serif text-[#FBF9F5] mt-1 block">₹{totalPipelineValue.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-emerald-400">100% Adjustable Credit</span>
              </div>
              <div className="bg-[#23201D] p-4 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85] block">Hot / High Intent</span>
                <span className="text-2xl font-serif text-amber-400 mt-1 block">
                  {leads.filter((l) => l.temperature === 'HOT').length}
                </span>
                <span className="text-[10px] text-[#968E85]">Score ≥ {settings.hotScoreThreshold}</span>
              </div>
            </div>

            {/* Filter & Search Toolbar */}
            <div className="bg-[#23201D] p-4 border border-[#2C2926] flex flex-col md:flex-row gap-3 justify-between items-center">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#968E85] absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search client, city, or product..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="w-full bg-[#191816] border border-[#3E3A36] pl-9 pr-3 py-2 text-xs text-[#FBF9F5] placeholder-[#968E85] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto text-xs">
                <select
                  value={selectedStageFilter}
                  onChange={(e) => setSelectedStageFilter(e.target.value)}
                  className="bg-[#191816] border border-[#3E3A36] px-3 py-2 text-[#FBF9F5] text-xs focus:outline-none"
                >
                  <option value="ALL">All Stages</option>
                  <option value="Design Reservation">Design Reservation</option>
                  <option value="Atelier Curating">Atelier Curating</option>
                  <option value="Atelier Dispatched">Atelier Dispatched</option>
                  <option value="Atelier Delivered">Atelier Delivered</option>
                  <option value="Materials Shortlisted">Materials Shortlisted</option>
                  <option value="Design Consultation">Design Consultation</option>
                  <option value="Quote Sent">Quote Sent</option>
                  <option value="Order Confirmed">Order Confirmed</option>
                </select>

                <select
                  value={selectedTempFilter}
                  onChange={(e) => setSelectedTempFilter(e.target.value)}
                  className="bg-[#191816] border border-[#3E3A36] px-3 py-2 text-[#FBF9F5] text-xs focus:outline-none"
                >
                  <option value="ALL">All Temperatures</option>
                  <option value="HOT">HOT</option>
                  <option value="WARM">WARM</option>
                  <option value="NURTURE">NURTURE</option>
                </select>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-[#23201D] border border-[#2C2926] overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#191816] border-b border-[#2C2926] text-[10px] tracking-wider uppercase text-[#968E85]">
                  <tr>
                    <th className="p-3.5">Client & City</th>
                    <th className="p-3.5">Product & Variant</th>
                    <th className="p-3.5">Pipeline Stage</th>
                    <th className="p-3.5">Lead Score</th>
                    <th className="p-3.5">Swatches Shortlisted</th>
                    <th className="p-3.5">Reservation Credit</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C2926]">
                  {filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-[#2A2723] transition-colors"
                    >
                      {/* Client */}
                      <td className="p-3.5">
                        <div className="font-medium text-[#FBF9F5]">{lead.customerName}</div>
                        <div className="text-[11px] text-[#968E85] flex items-center space-x-1.5 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#A6865A]" />
                          <span>{lead.city} • {lead.projectType}</span>
                        </div>
                        <div className="text-[10px] text-[#736B63]">{lead.customerPhone}</div>
                      </td>

                      {/* Product */}
                      <td className="p-3.5">
                        <div className="text-[#FBF9F5] font-medium">{lead.productName}</div>
                        <div className="text-[11px] text-[#C5A880]">{lead.variantName}</div>
                        <div className="text-[10px] text-[#968E85]">
                          Timeline: {lead.timeline}
                        </div>
                      </td>

                      {/* Stage */}
                      <td className="p-3.5">
                        <select
                          value={lead.stage}
                          onChange={(e) =>
                            updateLeadStage(lead.id, e.target.value as LeadStage)
                          }
                          className="bg-[#191816] border border-[#3E3A36] px-2.5 py-1.5 text-xs text-[#FBF9F5] focus:outline-none"
                        >
                          <option value="New Lead">New Lead</option>
                          <option value="Design Reservation">Design Reservation</option>
                          <option value="Atelier Curating">Atelier Curating</option>
                          <option value="Atelier Dispatched">Atelier Dispatched</option>
                          <option value="Atelier Delivered">Atelier Delivered</option>
                          <option value="Materials Shortlisted">Materials Shortlisted</option>
                          <option value="Design Consultation">Design Consultation</option>
                          <option value="Quote Sent">Quote Sent</option>
                          <option value="Order Confirmed">Order Confirmed</option>
                          <option value="Production">Production</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>

                      {/* Score */}
                      <td className="p-3.5">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-0.5 text-[10px] uppercase font-bold border rounded ${getTemperatureBadge(
                              lead.temperature
                            )}`}
                          >
                            {lead.temperature}
                          </span>
                          <span className="font-mono text-[#FBF9F5] font-semibold">
                            {lead.score}/100
                          </span>
                        </div>
                      </td>

                      {/* Swatches */}
                      <td className="p-3.5">
                        <span className="font-medium text-[#FBF9F5]">
                          {lead.shortlistCount} Shortlisted
                        </span>
                        {lead.shortlistCount > 0 && (
                          <span className="text-[10px] text-[#A6865A] block">
                            Active Digital Engagement
                          </span>
                        )}
                      </td>

                      {/* Reservation */}
                      <td className="p-3.5">
                        {lead.reservationId ? (
                          <div>
                            <span className="text-emerald-400 font-medium">
                              ₹{settings.reservationAmount} Paid
                            </span>
                            <span className="text-[10px] text-[#968E85] block font-mono">
                              {lead.reservationId}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[#736B63]">No reservation yet</span>
                        )}
                      </td>

                      {/* Action */}
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="p-1.5 border border-[#3E3A36] text-[#D1C7BB] hover:text-white hover:border-[#C5A880] transition-colors cursor-pointer"
                          title="Inspect Lead Dossier"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Lead Dossier Modal / Drawer */}
            {selectedLead && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                <div className="bg-[#23201D] border border-[#3E3A36] max-w-xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto">
                  <div className="flex justify-between items-start border-b border-[#3E3A36] pb-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-mono">
                        Lead Dossier • {selectedLead.id}
                      </span>
                      <h3 className="text-xl font-serif text-[#FBF9F5] mt-1">
                        {selectedLead.customerName}
                      </h3>
                      <p className="text-xs text-[#968E85]">{selectedLead.city} • {selectedLead.projectType}</p>
                    </div>
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="text-[#968E85] hover:text-white p-1 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-[#191816] p-3 border border-[#2C2926]">
                    <div>
                      <span className="text-[#736B63] block">Phone</span>
                      <span className="text-[#FBF9F5] font-mono">{selectedLead.customerPhone}</span>
                    </div>
                    <div>
                      <span className="text-[#736B63] block">Email</span>
                      <span className="text-[#FBF9F5]">{selectedLead.customerEmail}</span>
                    </div>
                    <div>
                      <span className="text-[#736B63] block">Product Interest</span>
                      <span className="text-[#C5A880]">{selectedLead.productName} ({selectedLead.variantName})</span>
                    </div>
                    <div>
                      <span className="text-[#736B63] block">Timeline</span>
                      <span className="text-[#FBF9F5]">{selectedLead.timeline}</span>
                    </div>
                  </div>

                  {/* Notes & Activity */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#968E85] block">
                      Internal Atelier Notes & Activity Log
                    </span>
                    <div className="bg-[#191816] p-3 border border-[#2C2926] space-y-1.5 text-xs text-[#D1C7BB]">
                      {selectedLead.notes.map((note, idx) => (
                        <p key={idx} className="border-b border-[#2C2926] pb-1 last:border-0 last:pb-0">
                          • {note}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setSelectedLead(null)}
                      className="bg-[#C5A880] text-[#191816] px-5 py-2 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Close Dossier
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: RESERVATIONS & ATELIER FULFILLMENT */}
        {activeTab === 'reservations' && (
          <div className="space-y-6">
            
            <div className="border-b border-[#2C2926] pb-4 flex justify-between items-center">
              <div>
                <h3 className="font-serif text-2xl uppercase tracking-wider text-[#FBF9F5]">
                  Design Reservations & Atelier Logistics
                </h3>
                <p className="text-xs text-[#968E85] mt-1">
                  Tracking the ₹{settings.reservationAmount} reservations and physical Atelier box courier dispatch.
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#968E85] uppercase block">Total Reservations Logged</span>
                <span className="font-serif text-xl text-[#C5A880]">{reservations.length} Orders</span>
              </div>
            </div>

            <div className="bg-[#23201D] border border-[#2C2926] overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#191816] border-b border-[#2C2926] text-[10px] tracking-wider uppercase text-[#968E85]">
                  <tr>
                    <th className="p-3.5">Reference ID</th>
                    <th className="p-3.5">Customer</th>
                    <th className="p-3.5">Product & Variant</th>
                    <th className="p-3.5">Accounting Breakdown</th>
                    <th className="p-3.5">100% Credit Status</th>
                    <th className="p-3.5">Physical Kit Dispatch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C2926]">
                  {reservations.map((res) => {
                    const remaining = res.remainingPayableAfterAdjustment;
                    return (
                      <tr key={res.id} className="hover:bg-[#2A2723]">
                        {/* ID */}
                        <td className="p-3.5">
                          <span className="font-mono text-[#C5A880] font-semibold">{res.id}</span>
                          <span className="text-[10px] text-[#736B63] block">
                            {new Date(res.reservationDate).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="p-3.5">
                          <div className="font-medium text-[#FBF9F5]">{res.customerName}</div>
                          <div className="text-[11px] text-[#968E85]">{res.city}</div>
                          <div className="text-[10px] text-[#736B63]">{res.customerPhone}</div>
                        </td>

                        {/* Product */}
                        <td className="p-3.5">
                          <div className="text-[#FBF9F5]">{res.productName}</div>
                          <div className="text-[11px] text-[#A6865A]">{res.variantName}</div>
                        </td>

                        {/* Accounting */}
                        <td className="p-3.5">
                          <div className="text-[#968E85] text-[11px]">
                            Base: ₹{res.productPrice.toLocaleString('en-IN')}
                          </div>
                          <div className="text-emerald-400 font-medium text-[11px]">
                            Paid: ₹{res.reservationFeePaid.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[#FBF9F5] font-semibold">
                            Bal: ₹{remaining.toLocaleString('en-IN')}
                          </div>
                        </td>

                        {/* Credit Status */}
                        <td className="p-3.5">
                          <span className="inline-flex items-center px-2 py-0.5 text-[10px] uppercase font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 rounded">
                            {res.reservationStatus} (100% Adjusted)
                          </span>
                        </td>

                        {/* Atelier Fulfillment Status */}
                        <td className="p-3.5">
                          <select
                            value={res.atelierStatus}
                            onChange={(e) =>
                              updateAtelierStatus(res.id, e.target.value as AtelierStatus)
                            }
                            className="bg-[#191816] border border-[#3E3A36] px-2.5 py-1.5 text-xs text-[#FBF9F5] focus:outline-none"
                          >
                            <option value="Payment Confirmed">Payment Confirmed</option>
                            <option value="Curating">Curating in Atelier</option>
                            <option value="Quality Check">Quality Check</option>
                            <option value="Packed">Packed in Case</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Delivered">Delivered to Client</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 3: FUNNEL ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="border-b border-[#2C2926] pb-4">
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#FBF9F5]">
                Conversion Funnel & Engagement Analytics
              </h3>
              <p className="text-xs text-[#968E85] mt-1">
                Real-time tracking of visitor drop-off, reservation velocity, and digital swatch interactions.
              </p>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#23201D] p-5 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85]">Product Views</span>
                <div className="text-3xl font-serif text-[#FBF9F5] mt-2">
                  {analytics.funnel.productViews.toLocaleString()}
                </div>
                <span className="text-[10px] text-[#A6865A] mt-1 block">Organic & Editorial</span>
              </div>

              <div className="bg-[#23201D] p-5 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85]">Atelier CTA Clickers</span>
                <div className="text-3xl font-serif text-[#C5A880] mt-2">
                  {analytics.funnel.atelierInteractions}
                </div>
                <span className="text-[10px] text-emerald-400 mt-1 block">
                  {((analytics.funnel.atelierInteractions / analytics.funnel.productViews) * 100).toFixed(1)}% Intent Rate
                </span>
              </div>

              <div className="bg-[#23201D] p-5 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85]">Paid Reservations</span>
                <div className="text-3xl font-serif text-emerald-400 mt-2">
                  {analytics.funnel.reservationsCompleted}
                </div>
                <span className="text-[10px] text-[#968E85] mt-1 block">
                  ₹{analytics.totalReservationRevenue.toLocaleString('en-IN')} Collected
                </span>
              </div>

              <div className="bg-[#23201D] p-5 border border-[#2C2926]">
                <span className="text-[10px] uppercase tracking-wider text-[#968E85]">Consultations Booked</span>
                <div className="text-3xl font-serif text-amber-400 mt-2">
                  {analytics.funnel.consultationsBooked}
                </div>
                <span className="text-[10px] text-[#C5A880] mt-1 block">High Closing Probability</span>
              </div>
            </div>

            {/* Conversion Visualizer */}
            <div className="bg-[#23201D] p-6 border border-[#2C2926] space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                House Of Form Funnel Velocity
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>1. Product Page Exploration (100%)</span>
                    <span>{analytics.funnel.productViews}</span>
                  </div>
                  <div className="w-full bg-[#191816] h-2">
                    <div className="bg-[#736B63] h-2 w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>2. Experience Material Atelier CTA Click</span>
                    <span>{analytics.funnel.atelierInteractions}</span>
                  </div>
                  <div className="w-full bg-[#191816] h-2">
                    <div
                      className="bg-[#C5A880] h-2"
                      style={{
                        width: `${(analytics.funnel.atelierInteractions / analytics.funnel.productViews) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>3. Paid ₹{settings.reservationAmount} Design Reservation</span>
                    <span>{analytics.funnel.reservationsCompleted}</span>
                  </div>
                  <div className="w-full bg-[#191816] h-2">
                    <div
                      className="bg-emerald-500 h-2"
                      style={{
                        width: `${(analytics.funnel.reservationsCompleted / analytics.funnel.productViews) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span>4. Digital Swatch Passport Shortlists</span>
                    <span>{analytics.funnel.materialsShortlisted} Actions</span>
                  </div>
                  <div className="w-full bg-[#191816] h-2">
                    <div className="bg-purple-500 h-2 w-1/2" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: MATERIALS LIBRARY */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="border-b border-[#2C2926] pb-4">
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#FBF9F5]">
                Material Swatches & Finishes Catalog
              </h3>
              <p className="text-xs text-[#968E85] mt-1">
                Active tactile inventory included in the physical Material Atelier kits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.map((m) => (
                <div key={m.id} className="bg-[#23201D] border border-[#2C2926] p-4 space-y-3">
                  <div className="aspect-[16/9] overflow-hidden bg-[#191816]">
                    <img src={m.swatchImage} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-[#C5A880] font-mono">
                      <span>{m.id}</span>
                      <span>{m.family}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#FBF9F5] mt-0.5">{m.name}</h4>
                    <p className="text-xs text-[#968E85] mt-1">{m.composition}</p>
                  </div>
                  <div className="text-[10px] text-[#736B63] border-t border-[#2C2926] pt-2 flex justify-between">
                    <span>Martindale: {m.performance.martindaleCycles.toLocaleString()}</span>
                    <span>Pilling: {m.performance.pillingResistance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-2xl">
            <div className="border-b border-[#2C2926] pb-4">
              <h3 className="font-serif text-2xl uppercase tracking-wider text-[#FBF9F5]">
                Atelier Configuration & Scoring Rules
              </h3>
              <p className="text-xs text-[#968E85] mt-1">
                Adjust commercial parameters, reservation fees, and CRM lead scoring thresholds.
              </p>
            </div>

            <div className="bg-[#23201D] p-6 border border-[#2C2926] space-y-4 text-xs">
              <div>
                <label className="block text-[#968E85] uppercase tracking-wider mb-1">
                  Design Reservation Fee (INR)
                </label>
                <input
                  type="number"
                  value={settings.reservationAmount}
                  onChange={(e) =>
                    updateSettings({ ...settings, reservationAmount: Number(e.target.value) })
                  }
                  className="w-full bg-[#191816] border border-[#3E3A36] p-2.5 text-[#FBF9F5] font-mono"
                />
                <p className="text-[10px] text-[#736B63] mt-1">
                  Amount charged to unlock the physical Material Atelier. 100% credited against future purchase.
                </p>
              </div>

              <div>
                <label className="block text-[#968E85] uppercase tracking-wider mb-1">
                  Reservation Credit Validity (Days)
                </label>
                <input
                  type="number"
                  value={settings.reservationValidityDays}
                  onChange={(e) =>
                    updateSettings({ ...settings, reservationValidityDays: Number(e.target.value) })
                  }
                  className="w-full bg-[#191816] border border-[#3E3A36] p-2.5 text-[#FBF9F5] font-mono"
                />
              </div>

              <div className="pt-4 border-t border-[#2C2926] flex justify-between items-center">
                <div>
                  <span className="text-[#FBF9F5] font-medium block">Reset Demo State</span>
                  <span className="text-[10px] text-[#736B63]">Restore clean realistic seed leads & reservations</span>
                </div>
                <button
                  onClick={resetToSeedData}
                  className="bg-[#2C2926] hover:bg-[#3E3A36] text-[#D1C7BB] px-4 py-2 text-xs font-semibold cursor-pointer border border-[#3E3A36] flex items-center space-x-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Seed Data</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
