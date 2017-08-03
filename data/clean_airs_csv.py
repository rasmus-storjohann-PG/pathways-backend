import csv
import os

# TODO: Port this thing to Node!!!!

if __name__ == "__main__":
    dir_path = os.path.dirname(os.path.realpath(__file__))

    file = os.path.join(dir_path, "airs_dump/2015Mar-LATaxonomy-bc211Keywordcrosswalkguide-ACTIVE.csv")
    output = os.path.join(dir_path, "airs_dump/airs_taxonomy.csv")

    output_csv_lines = []
    headers = None

    with open(file, "rU") as infile:
        reader = csv.reader(infile, dialect=csv.excel_tab)
        headers = reader.next()[0].split(",")
        # Hack - The second column is named Code+B1, which is not that good for attributing to mongodb.
        # So we rename it CodeName
        # headers[1] = "CodeName"

        # go back to the beginning
        infile.seek(0)
        dict_reader = csv.DictReader(infile)

        for entry in dict_reader:

            if not entry['Code']:
                last_entry = output_csv_lines[-1]
                # && delineated keywords
                last_entry['Keywords'] += "&&" + entry['Keywords']
                output_csv_lines[-1] = last_entry
                continue

            output_csv_lines.append(entry)

    with open(output, "w") as outfile:
        csvwriter = csv.DictWriter(outfile, fieldnames=headers)
        csvwriter.writeheader()
        for line in output_csv_lines:
            csvwriter.writerow(line)
