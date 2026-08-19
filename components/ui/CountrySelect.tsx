/*--====-- Custom Country Select Component --====--*/
"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown, Search } from "lucide-react";

interface CountryOption {
  code: string;
  name: string;
  value: string;
}

interface CountrySelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  countries: CountryOption[];
  placeholder?: string;
  required?: boolean;
}

export function CountrySelect({
  id,
  value,
  onChange,
  countries,
  placeholder = "Select Your Country",
  required = false,
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /*--====-- Safety Check for Countries --====--*/
  const safeCountries = countries || [];

  /*--====-- Get Selected Country --====--*/
  const selectedCountry = safeCountries.find((c) => c.value === value);

  /*--====-- Filter Countries Based on Search Query --====--*/
  const filteredCountries = safeCountries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  /*--====-- Close Dropdown When Clicking Outside --====--*/
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /*--====-- Focus Search Input When Dropdown Opens --====--*/
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  /*--====-- Handle Country Selection --====--*/
  const handleSelect = (countryValue: string) => {
    onChange(countryValue);
    setIsOpen(false);
    setSearchQuery("");
  };

  /*--====-- Handle Dropdown Toggle --====--*/
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchQuery("");
    }
  };

  return (
    <div className={`relative ${isOpen ? "z-50" : "z-10"}`} ref={dropdownRef}>
      {/*--====-- Custom Select Button --====--*/}
      <button
        id={id}
        type="button"
        onClick={toggleDropdown}
        className={`w-full px-4 py-3 border-2 bg-acGraylight2 rounded-xl focus:outline-none transition-colors text-foreground flex items-center justify-between cursor-pointer hover:border-theme-start ${
          isOpen ? "border-theme-start" : "border-acDarkGray"
        }`}
      >
        <div className="flex items-center gap-3">
          {selectedCountry ? (
            <>
              <ReactCountryFlag
                countryCode={selectedCountry.code}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "2px",
                }}
              />
              <span>{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-muted-foreground line-clamp-1">
              {placeholder}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/*--====-- Dropdown Menu --====--*/}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2  bg-acGraylight2 border-2 border-acDarkGray rounded-xl shadow-xl overflow-hidden">
          {/*--====-- Search Input --====--*/}
          <div className="p-3 border-b  border-acDarkGray bg-acGraylight2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country..."
                className="w-full pl-10 pr-4 py-2 border-acDarkGray bg-acGraylight2 border-2 rounded-lg focus:outline-none focus:border-theme-start transition-colors text-foreground placeholder:text-muted-foreground text-sm"
              />
            </div>
          </div>

          {/*--====-- Countries List --====--*/}
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.value}
                  type="button"
                  onClick={() => handleSelect(country.value)}
                  className="w-full px-4 py-3 flex items-center gap-3  rounded-3xl  hover:bg-linear-to-r hover:from-theme-start hover:to-theme-end transition-colors text-left"
                >
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      borderRadius: "2px",
                    }}
                  />
                  <span className="text-foreground">{country.name}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-muted-foreground">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}

      {/*--====-- Hidden Input for Form Validation --====--*/}
      <input type="hidden" name="country" value={value} required={required} />
    </div>
  );
}
