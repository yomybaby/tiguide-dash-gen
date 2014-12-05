require! fs

md = require("marked")
Sequelize = require("sequelize")
mkdirp = require("mkdirp")
cheerio = require('cheerio')
_ = require("underscore")
wrench = require('wrench')


# Starting point
files = ["Alloy_Framework"]
notFound = []

regexps = [
  /\[\[(.*?)\|(.*?)(#(.*))?\]\]/
  /\[(.*?)\]\((.*?)(#(.*))?\)/
]
counter = 0
while counter < files.length
  
  # 파일을 읽어서 
  try
    console.log(files[counter])
    result = fs.readFileSync("guides/#{files[counter]}/README.html", 'utf-8')
  catch e
    exi.push(e.path)
    counter++
    continue
  counter++
  
  $ = cheerio.load(result);
  links = $('a.document-link')
  
  contentNames = ['Chapters', 'Sections']
  if contentNames.indexOf($('.section.section-2 h2.heading span').html()) == -1
    continue

  for link in links
    filename = link.attribs.href.replace("#!/guide/","").split('-section')[0]
    if files.indexOf(filename) == -1
      files.push(filename)
   
#   # 한줄 한줄 나눠서 lines에 넣고
#   try
#     lines =  result.split("\n")
#   catch
#     console.log files[counter]
#     console.log e
#     return

#   # 한줄 한줄 정규식 돌려서 링크를 찾아 해당 링크의 파일이 files 목록에 없으면 추가
#   for line in lines
#     for regexp in regexps
#       if regexp.test(line)
#         result =  regexp.exec(line)
#         page = result[2]
#         if page not in files and page.indexOf(\http) != 0
#           files.push(page.replace(" ", "-"))

mkdirp.sync("TitaniumGuide.docset/Contents/Resources/Documents/css")

obj =
  Section: []
  Namespace: []
  Method: [],
  Guide : []

for file in files
  if fs.existsSync("guides/#file/README.html")
    $ = cheerio.load(fs.readFileSync("guides/#file/README.html", 'utf-8'))
    $('#editButton').remove()
    $('.footer').remove()

    # if $('ul.toc-indentation').length
    obj.Guide.push({ name:file.replace(/_/g,' ') , path:file+".html" })

#     # md_data = "" + fs.readFileSync("guides/#file/README.html", 'utf-8')
#     # #  불필요한 부분 replace
#     # md_data = md_data.replace(/\[\[([\w-_]+?)\s+([\w-_]+?)\]\]/g, "[$1 $2]($1-$2)")
#     # md_data = md_data.replace(/\[\[(svg:\w+)\|(.*?)\]\]/g, "[$1]($2)")
#     # md_data = md_data.replace(/\[(.*?)\]\((.*?)(#(.*))?\)/g, "[$1]($2.html$3)")
#     # md_data = md_data.replace(/\[\[(.*?)\|(.*?)(#(.*))?\]\]/g, "[$1]($2.html$3)")
#     # md_data = md_data.replace(/\[\[(.*?)\]\]/g, "[$1]($1.html)")
#     # md_data = md_data.replace(/"([\w-]+)#([\w-]*)"/g, '"$1.html#$2"')
#     # html_data = md(md_data)
#     try
#       html_data = html_data.split("\n").slice(3).join("\n")
#     catch e
#       console.log(md_data)
#       console.log(html_data)
#       console.log e
#       return
#     html_data = html_data.replace(/a(.*)name="(\w*?)"/g, 'a$1name="wiki-$2"')
#     html_data = html_data.replace(/src="([\w\.]+)\.html"/g, 'src="$1"')
    final_data = """
<!-- single file version -->
<!DOCTYPE html>
<html>
<head>
  <link href="css/github.css" rel="stylesheet" type="text/css">
  <link href="resources/css/common.css" rel="stylesheet" type="text/css">
  <meta charset="utf-8" />
</head>
<body>
#{$('body').html()}
</body>
</html>
    """

    # 파일 복사
    fs.writeFileSync("TitaniumGuide.docset/Contents/Resources/Documents/#file.html", final_data, 'utf-8')

    # wrench.copyDirSyncRecursive('resources', 'TitaniumGuide.docset/Contents/Resources/Documents/resources', {
    #     forceDelete: true
    # });
# # Extracting informations, I assume everything is in API-Reference.md
# # api = fs.readFileSync("d3.wiki/API-Reference.md", 'utf-8')
# # link_1st = /\[\[([\w\.-]+)\|([\w-]+)(#([\w-\.]+))?\]\]/g
# # link_2nd = /\[([\w\.-]+)\]\(([\w-]+)(#([\w-\.]+))?\)/g

# # full_results = []
# # while result = link_1st.exec(api)
# #   full_results.push result
# # while result = link_2nd.exec(api)
# #   full_results.push result


  
objectify = (x) -> name: x[1], path: x[2]+".html"+( x[3] ? "")
# for result in full_results
#   if result[1].indexOf("d3.") == 0 and result[1].match(/\./g).length == 1
#     obj.Namespace.push objectify result
#   else if not result[3]?
#     obj.Section.push objectify result
#   else if result[1].indexOf(".") != -1
#     obj.Method.push objectify result
#   else if result[1].indexOf(".") == -1
#     0 # This looks weird, not including



# Copying files
fs.createReadStream('github.css').pipe(fs.createWriteStream('TitaniumGuide.docset/Contents/Resources/Documents/css/github.css'));
fs.createReadStream('Info.plist').pipe(fs.createWriteStream('TitaniumGuide.docset/Contents/Info.plist'));
fs.createReadStream('icon.png').pipe(fs.createWriteStream('TitaniumGuide.docset/icon.png'));

# # for file in fs.readdirSync("d3.wiki/")
# #   if file.indexOf('.png') != -1
# #     fs.createReadStream("d3.wiki/#file").pipe(fs.createWriteStream("D3JS.docset/Contents/Resources/Documents/#file"));


# Creating SQLite index

seq = new Sequelize('database', 'username', 'password', 
  dialect: 'sqlite'
  storage: 'TitaniumGuide.docset/Contents/Resources/docSet.dsidx'
)

SearchIndex = seq.define \searchIndex,
  * id:
      type: Sequelize.INTEGER
      autoIncrement: true
    name:
      type: Sequelize.STRING
    type: 
      type: Sequelize.STRING
    path: 
      type: Sequelize.STRING
  * freezeTableName: true
    timestamps: false

SearchIndex.sync().success ->
  for key, items of obj
    for item in items
      si = SearchIndex.build(name: item.name, type: key, path: item.path)
      si.save()


